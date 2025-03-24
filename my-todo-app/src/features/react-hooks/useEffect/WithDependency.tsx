import React, { useEffect, useState } from "react";
import { useMessageStack } from "./MessageStackProvider.tsx";

const WithDependency: React.FC = () => {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("React");
	const { showMessage } = useMessageStack();

	// 🔹 Effect re-runs when `count` changes
	useEffect(() => {
		showMessage(`Count changed: ${count}`);
	}, [count]);

	// 🔹 Effect re-runs when `text` changes
	useEffect(() => {
		showMessage(`Text changed: ${text}`);
	}, [text]);

	return (
		<div className="p-6 bg-white shadow-md rounded-lg max-w-xl mx-auto mt-10 relative">
			{/* 🔹 Brief */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Brief</h3>
				<p className="text-gray-700">
					The <code className="bg-gray-100 p-1 rounded">useEffect</code> hook with a dependency array runs when the component mounts and whenever one of the dependencies changes.
					It is useful for <strong>reacting to state or prop updates</strong>.
				</p>
			</section>

			{/* 🔹 Flow */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Flow</h3>
				<ol className="list-decimal list-inside text-gray-700">
					<li>Component renders.</li>
					<li><code className="bg-gray-100 p-1 rounded">useEffect</code> runs if dependencies change.</li>
					<li>Effect cleans up before running again (if needed).</li>
				</ol>
			</section>

			{/* 🔹 Use Cases */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Use Cases</h3>
				<ul className="list-disc list-inside text-gray-700">
					<li>✅ Fetching data when a filter/state changes.</li>
					<li>✅ Updating the page title when state updates.</li>
					<li>✅ Subscribing to WebSocket events when a user logs in.</li>
					<li>✅ Watching props/state to trigger side effects.</li>
				</ul>
			</section>

			{/* 🔹 Pitfalls */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Pitfalls</h3>
				<ul className="list-disc list-inside text-gray-700">
					<li>❌ Including unnecessary dependencies may cause excessive re-renders.</li>
					<li>❌ Omitting dependencies may lead to stale data.</li>
					<li>❌ Using objects/arrays as dependencies without memoization can trigger unnecessary re-runs.</li>
				</ul>
			</section>

			{/* 🔹 Example Code */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Example Code</h3>
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code className="text-sm text-gray-800">
                        {`
useEffect(() => {
    showMessage("📊 Count changed:", count);
}, [count]);

useEffect(() => {
    showMessage("🔠 Text changed:", text);
}, [text]);
                        `}
                    </code>
                </pre>
			</section>

			{/* 🔹 Button Interaction */}
			<div className="space-x-4">
				<button
					onClick={() => setCount(count + 1)}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
				>
					Increment Count ({count})
				</button>

				<button
					onClick={() => setText(text === "React" ? "Next.js" : "React")}
					className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
				>
					Toggle Text ({text})
				</button>
			</div>
		</div>
	);
};

export default WithDependency;
