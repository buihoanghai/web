import { useState, useEffect, useDebugValue } from "react";

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useDebugValue(isOnline ? "🟢 Online" : "🔴 Offline"); // Shows in React DevTools

    useEffect(() => {
        const handleStatusChange = () => setIsOnline(navigator.onLine);

        window.addEventListener("online", handleStatusChange);
        window.addEventListener("offline", handleStatusChange);

        return () => {
            window.removeEventListener("online", handleStatusChange);
            window.removeEventListener("offline", handleStatusChange);
        };
    }, []);

    return isOnline;
}

export default function UseDebugValue() {
    const isOnline = useOnlineStatus();

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">useDebugValue Example</h1>
            <p className={`text-lg ${isOnline ? "text-green-500" : "text-red-500"}`}>
                {isOnline ? "🟢 You are Online" : "🔴 You are Offline"}
            </p>
        </div>
    );
}
