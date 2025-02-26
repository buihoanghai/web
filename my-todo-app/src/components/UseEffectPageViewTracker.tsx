import { useState, useEffect } from "react";

export default function UseEffectPageViewTracker() {
    const [views, setViews] = useState(() => {
        return Number(localStorage.getItem("pageViews") || 0);
    });

    useEffect(() => {
        setViews((prev) => {
            const newViews = prev + 1;
            localStorage.setItem("pageViews", newViews.toString()); // Save to localStorage
            return newViews;
        });
    }, []); // ✅ Runs only once on mount

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Page Views: {views}</h1>
        </div>
    );
}
