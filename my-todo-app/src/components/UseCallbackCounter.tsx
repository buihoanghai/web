import { useState, useCallback, memo } from "react";

const Counter = memo(({ onIncrement }: { onIncrement: () => void }) => {
    console.log("🔄 Counter re-rendered");
    return <button onClick={onIncrement}>Increment</button>;
});

export default function UseCallbackCounter() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const increment = useCallback(() => setCount(c => c + 1), []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <Counter onIncrement={increment} />
            <button onClick={() => setOtherState(!otherState)}>Toggle</button>
        </div>
    );
}
