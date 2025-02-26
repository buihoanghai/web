import { useState, useMemo } from "react";

function isPrime(n: number): boolean {
    console.log(`🔄 Checking if ${n} is prime...`);
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

export default function UseMemoPrimeCalculator() {
    const [number, setNumber] = useState(2);
    const [count, setCount] = useState(0);

    // ✅ useMemo calculates the prime number inside render
    const isPrimeNumber = useMemo(() => isPrime(number), [number]);

    return (
        <div>
            <h1>Number: {number}</h1>
            <h2>Is Prime? {isPrimeNumber ? "✅ Yes" : "❌ No"}</h2>
            <button onClick={() => setNumber(number + 1)}>Next Number</button>
            <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
        </div>
    );
}
