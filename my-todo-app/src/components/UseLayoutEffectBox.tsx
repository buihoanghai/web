import { useState, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffectBox() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        if (boxRef.current) {
            setWidth(boxRef.current.getBoundingClientRect().width);
        }
    }, []);

    return (
        <div>
            <div ref={boxRef} style={{ width: "50%", background: "lightblue" }}>
                Resize me!
            </div>
            <p>Box width: {width}px</p>
        </div>
    );
}
