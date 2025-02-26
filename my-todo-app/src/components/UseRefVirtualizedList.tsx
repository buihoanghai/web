import { useEffect, useRef, useState } from "react";

const totalItems = 10000; // Simulating 10,000 items
const itemHeight = 40; // Height of each item
const viewportHeight = 400; // Height of visible area

export default function UseRefVirtualizedList() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                setScrollTop(containerRef.current.scrollTop);
            }
        };

        const container = containerRef.current;
        container?.addEventListener("scroll", handleScroll);
        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    const startIdx = Math.floor(scrollTop / itemHeight);
    const visibleItemsCount = Math.ceil(viewportHeight / itemHeight);
    const visibleItems = Array.from(
        { length: visibleItemsCount },
        (_, i) => startIdx + i
    ).filter((index) => index < totalItems);

    return (
        <div
            ref={containerRef}
            className="w-64 h-[400px] overflow-auto border"
            style={{ position: "relative" }}
        >
            <div style={{ height: totalItems * itemHeight }}>
                {visibleItems.map((index) => (
                    <div
                        key={index}
                        className="border-b p-2"
                        style={{
                            position: "absolute",
                            top: index * itemHeight,
                            width: "100%",
                            height: itemHeight,
                        }}
                    >
                        Item {index}
                    </div>
                ))}
            </div>
        </div>
    );
}
