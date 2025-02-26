import { useState } from "react";

function Counter({ onIncrement }: { onIncrement: () => void }) {
    console.log("🔄 Counter re-rendered");
    return <button onClick={onIncrement}>Increment</button>;
}

export default function UseCallbackWithoutCounter() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const increment = () => setCount(count + 1); // ❌ This function is recreated on every render

    return (
        <div>
            <h2>Count: {count}</h2>
            <Counter onIncrement={increment} />
            <button onClick={() => setOtherState(!otherState)}>Toggle</button>
        </div>
    );
}
