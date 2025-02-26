import {useTheme} from "../contexts/ThemeProvider.tsx";
import {useAuth} from "../contexts/AuthProvider.tsx";

export default function UseContextThemeToggle() {
    const {theme, toggleTheme} = useTheme();
    const {user} = useAuth();

    return (
        <div className={`h-screen flex justify-center items-center bg-${theme === "light" ? "white" : "gray-900"}`}>
            <button
                onClick={toggleTheme}
                className="p-4 rounded bg-blue-500 text-white"
            >
                Toggle Theme (Current: {theme} Current {user ? "user: " + user : ""})
            </button>
        </div>
    );
}
