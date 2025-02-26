import { useState, useMemo } from "react";

const users = Array.from({ length: 10000 }, (_, i) => `User ${i + 1}`);

export default function UseMemoUserSearch() {
    const [query, setQuery] = useState("");

    const filteredUsers = useMemo(() => {
        console.log("Filtering users...");
        return users.filter(user => user.toLowerCase().includes(query.toLowerCase()));
    }, [query]); // ✅ Only recalculates when `query` changes

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search users..." />
            <ul>
                {filteredUsers.slice(0, 10).map(user => <li key={user}>{user}</li>)}
            </ul>
        </div>
    );
}
