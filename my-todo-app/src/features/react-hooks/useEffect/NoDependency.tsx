import React, { useEffect, useState } from "react";
import { useMessageStack } from "../../../components/MessageStackProvider.tsx";
const NoDependency: React.FC = () => {
	const [count, setCount] = useState(0);
	const { showMessage } = useMessageStack();
	useEffect(() => {
		setTimeout(()=>{
			showMessage("🔄 Component mounted or updated!");
		})
		return () => {
			setTimeout(()=>{
				showMessage("Be care full with Infinity loop!");
			})
		};
	});

	return (
		<div className="p-6 bg-white shadow-md rounded-lg max-w-xl mx-auto mt-10 relative">
			{/* 🔹 Brief */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Brief</h3>
				<p className="text-gray-700">
					The <code className="bg-gray-100 p-1 rounded">useEffect</code> hook with no dependency array runs after every render of the component.
					It is useful for operations that need to occur whenever the component updates, such as logging or
					interacting with external systems.
				</p>
			</section>

			{/* 🔹 Flow */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Flow</h3>
				<ol className="list-decimal list-inside text-gray-700">
					<li>Component renders.</li>
					<li><code className="bg-gray-100 p-1 rounded">useEffect</code> runs after the render.</li>
					<li>Cleanup function runs before the next effect or when the component unmounts.</li>
				</ol>
			</section>

			{/* 🔹 Pitfalls */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Pitfalls</h3>
				<ul className="list-disc list-inside text-gray-700">
					<li>Can lead to performance issues if the effect is expensive, as it runs after every render.</li>
					<li>Ensure cleanup is handled properly to avoid memory leaks.</li>
				</ul>
			</section>

			{/* 🔹 Example Code */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Example Code</h3>
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code className="text-sm text-gray-800">
                        {`
useEffect(() => {
    showMessage("🔄 Component mounted or updated!");

    return () => {
        showMessage("🗑️ Component unmounted!");
    };
});
                        `}
                    </code>
                </pre>
			</section>

			{/* Example interaction */}
			<button
				onClick={() => setCount(count + 1)}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
			>
				Increment Count ({count})
			</button>
		</div>
	);
};

export default NoDependency;
