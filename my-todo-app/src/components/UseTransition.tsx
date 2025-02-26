import { useState, useTransition } from "react";

export function FilterApp() {
    const [query, setQuery] = useState("");
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    const filteredItems = items.filter((item) => item.includes(query));

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to filter..."
            />
            <ul>
                {filteredItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export function UseTransitionFilterApp() {
    const [query, setQuery] = useState("");
    const [filteredQuery, setFilteredQuery] = useState("");
    const [isPending, startTransition] = useTransition();

    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    const filteredItems = items.filter((item) => item.includes(filteredQuery));

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);

        startTransition(() => {
            setFilteredQuery(e.target.value); // ✅ Non-urgent update
        });
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Type to filter..." />
            {isPending && <p>Loading...</p>} {/* Show when filtering is delayed */}
            <ul>
                {filteredItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

