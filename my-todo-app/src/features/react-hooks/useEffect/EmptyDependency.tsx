import React, { useEffect, useState } from "react";
import {useMessageStack} from "../../../contexts/MessageStackProvider.tsx";
const EmptyDependency: React.FC = () => {
	const [count, setCount] = useState(0);

	const { showMessage } = useMessageStack();

	// 🔹 Simulating API Call (Use Case: Fetching data once)
	useEffect(() => {
		showMessage("📡 Fetching data...");
		setTimeout(() => {
			showMessage("✅ Data loaded successfully!");
		}, 2000);
		return () => {
			showMessage("🗑️ Cleaning up API request...");
		};
	}, []); // ✅ Runs only once on mount

	// 🔹 Setting Up Event Listener (Use Case: Handling keyboard shortcuts)
	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				showMessage("⏎ Enter key pressed!");
			}
		};

		window.addEventListener("keydown", handleKeyPress);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
			showMessage("🚫 Removed keyboard listener!");
		};
	}, []);

	return (
		<div className="p-6 bg-white shadow-md rounded-lg max-w-xl mx-auto mt-10 relative">
			{/* Include MessageStack */}

			{/* 🔹 Brief */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Brief</h3>
				<p className="text-gray-700">
					The <code className="bg-gray-100 p-1 rounded">useEffect</code> hook with an empty dependency array
					runs <strong>only once</strong> when the component mounts and executes its cleanup function when it unmounts.
					It is useful for <strong>initialization logic</strong> (e.g., fetching data, setting up event listeners).
				</p>
			</section>

			{/* 🔹 Flow */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Flow</h3>
				<ol className="list-decimal list-inside text-gray-700">
					<li>Component renders.</li>
					<li><code className="bg-gray-100 p-1 rounded">useEffect</code> runs once after the render.</li>
					<li>Cleanup function runs when the component unmounts.</li>
				</ol>
			</section>

			{/* 🔹 Use Cases */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Use Cases</h3>
				<ul className="list-disc list-inside text-gray-700">
					<li>✅ <strong>Fetching data once</strong> when a page loads (e.g., API calls).</li>
					<li>✅ <strong>Subscribing to an event listener</strong> when a component mounts.</li>
					<li>✅ <strong>Initializing third-party services</strong> (e.g., analytics, WebSockets).</li>
					<li>✅ <strong>Setting up intervals</strong> that persist across renders.</li>
					<li>✅ <strong>Running animations</strong> only on first load (e.g., intro effects).</li>
				</ul>
			</section>

			{/* 🔹 Pitfalls */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Pitfalls</h3>
				<ul className="list-disc list-inside text-gray-700">
					<li>❌ Any state updates inside this effect <strong>will not trigger a re-run</strong>.</li>
					<li>❌ Can cause <strong>stale closures</strong> if referencing state/props that change later.</li>
					<li>❌ Must ensure <strong>cleanup functions are handled properly</strong> to prevent memory leaks.</li>
				</ul>
			</section>

			{/* 🔹 Example Code */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Example Code</h3>
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code className="text-sm text-gray-800">
                        {`
useEffect(() => {
    showMessage("📡 Fetching data...");

    setTimeout(() => {
        showMessage("✅ Data loaded successfully!");
    }, 2000);

    return () => {
        showMessage("🗑️ Cleaning up API request...");
    };
}, []);

// Event listener for keyboard input
useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            showMessage("⏎ Enter key pressed!");
        }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
        window.removeEventListener("keydown", handleKeyPress);
        showMessage("🚫 Removed keyboard listener!");
    };
}, []);
                        `}
                    </code>
                </pre>
			</section>

			{/* 🔹 Button Interaction */}
			<button
				onClick={() => {
					showMessage(`Clicked: Count ${count + 1}`);
					setCount(count + 1);
				}}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
			>
				Increment Count ({count})
			</button>
		</div>
	);
};

export default EmptyDependency;
