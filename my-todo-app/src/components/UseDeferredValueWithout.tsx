import { useState, useDeferredValue } from "react";

export function SearchApp() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query); // ✅ Defers updates

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <SlowSearchResults query={deferredQuery} />
        </div>
    );
}

function SlowSearchResults({ query }: { query: string }) {
    const slowResults = Array.from({ length: 5000 }, (_, i) => (
        <div key={i}>Result for "{query}" - {i}</div>
    ));

    return <div>{slowResults}</div>;
}

export function UseDeferredValueWithout() {
    const [query, setQuery] = useState("");

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <SlowSearchResults query={query} />
        </div>
    );
}
