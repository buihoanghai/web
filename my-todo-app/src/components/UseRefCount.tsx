import { useRef, useState } from "react";

export default function UseRefCount() {
    const countRef = useRef(0);
    const [count, setCount] = useState(0);

    const increment = () => {
        countRef.current += 1; // This does NOT trigger a re-render
        console.log("Ref count:", countRef.current);
    };

    const updateState = () => {
        setCount(prev => prev + 1); // This triggers a re-render
    };

    return (
        <div>
            <p>State Count: {count}</p>
            <p>Ref Count (doesn't cause re-render): {countRef.current}</p>
            <button onClick={increment}>Increment Ref Count</button>
            <button onClick={updateState}>Increment State Count</button>
        </div>
    );
}
