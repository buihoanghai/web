import React, { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import { useMessageStack } from "../../components/MessageStackProvider";

const UseContext: React.FC = () => {
	const {theme, toggleTheme} = useTheme();
	const { showMessage } = useMessageStack();

	useEffect(() => {
		showMessage(`Theme changed: ${theme}`);
	}, [theme]);

	return (
		<div className=" theme-container p-6 shadow-md rounded-lg max-w-4xl mx-auto space-y-6 mt-10 relative">
			{/* 🔹 Brief */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Brief</h3>
				<p>
					The <code className="theme-bg-text bg-gray-100 p-1 rounded">useContext</code> hook allows components to access values from a
					React Context without passing props manually through each level.
				</p>
			</section>

			{/* 🔹 Flow */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Flow</h3>
				<ol className="list-decimal list-inside">
					<li>A Context Provider wraps components.</li>
					<li>Components use <code>useContext</code> to access shared state.</li>
					<li>When the Context value updates, all consuming components re-render.</li>
				</ol>
			</section>

			{/* 🔹 Use Cases */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Use Cases</h3>
				<ul className="list-disc list-inside">
					<li>✅ Theme switching (light/dark mode)</li>
					<li>✅ User authentication state</li>
					<li>✅ Language (i18n) selection</li>
					<li>✅ Global state management (instead of prop drilling)</li>
				</ul>
			</section>

			{/* 🔹 Pitfalls */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Pitfalls</h3>
				<ul className="list-disc list-inside">
					<li>❌ Overusing Context can make re-renders expensive.</li>
					<li>❌ Updating Context too frequently can slow performance.</li>
					<li>❌ Avoid using Context for state that frequently changes (use state instead).</li>
				</ul>
			</section>

			{/* 🔹 Example Code for Context Provider */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Example: Creating a Context Provider</h3>
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code className="text-sm text-gray-800">
                        {`
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext(null);

// 2️⃣ Create Provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3️⃣ Custom Hook for Usage
export const useTheme = () => {
    return useContext(ThemeContext);
};
                        `}
                    </code>
                </pre>
			</section>

			{/* 🔹 Button Interaction */}
			<div className="space-x-4">
				<button
					onClick={toggleTheme}
					className=" theme-button px-4 py-2 rounded transition"
				>
					Toggle Theme
				</button>
			</div>
		</div>
	);
};

export default UseContext;
