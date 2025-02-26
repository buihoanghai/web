import { useState, useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffectDarkMode() {
    const [size, setSize] = useState(100);
    const [bgEffect, setBgEffect] = useState("bg-blue-500");
    const [bgLayout, setBgLayout] = useState("bg-blue-500");
    const boxEffectRef = useRef<HTMLDivElement>(null);
    const boxLayoutRef = useRef<HTMLDivElement>(null);

    // 🔴 This runs AFTER the browser paints (may cause flicker)
    useEffect(() => {
        if (boxEffectRef.current) {
            setBgEffect("bg-red-500");
        }
    }, [size]);

    // 🟢 This runs BEFORE the browser paints (no flicker)
    useLayoutEffect(() => {
        if (boxLayoutRef.current) {
            setBgLayout("bg-green-500");
        }
    }, [size]);

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold mb-4">useEffect vs useLayoutEffect</h1>

            <button
                onClick={() => setSize(size + 50)}
                className="bg-gray-700 text-white px-4 py-2 rounded mx-2"
            >
                Resize with useEffect (May Flicker)
            </button>

            <button
                onClick={() => setSize(size + 50)}
                className="bg-gray-900 text-white px-4 py-2 rounded mx-2"
            >
                Resize with useLayoutEffect (No Flicker)
            </button>

            <div className="flex justify-center mt-4 gap-4">
                {/* 🔴 Box that updates with useEffect */}
                <div
                    ref={boxEffectRef}
                    className={`w-${size} h-12 ${bgEffect} text-white flex justify-center items-center`}
                    style={{ width: size, height: 50 }}
                >
                    useEffect
                </div>

                {/* 🟢 Box that updates with useLayoutEffect */}
                <div
                    ref={boxLayoutRef}
                    className={`w-${size} h-12 ${bgLayout} text-white flex justify-center items-center`}
                    style={{ width: size, height: 50 }}
                >
                    useLayoutEffect
                </div>
            </div>
        </div>
    );
}
