import {useAuth} from "../contexts/AuthProvider.tsx";

export function UseContextAuthButtons() {
    const {user, login, logout} = useAuth();
    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user}!</p>
                    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                </>
            ) : (
                <button onClick={() => login("HaiBui")} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Login as HaiBui
                </button>
            )}
        </div>
    );
}