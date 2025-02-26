import { useState } from "react";

function isPrime(num: number): boolean {
    console.log("Checking prime...");
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export default function PrimeCalculator() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const prime = isPrime(number); // ❌ Recalculates on every render

    return (
        <div>
            <h2 className="flex-col">Prime Checker</h2>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            <p>{number} is {prime ? "Prime" : "Not Prime"}</p>
            <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
        </div>
    );
}
