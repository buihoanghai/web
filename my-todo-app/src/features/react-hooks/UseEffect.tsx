import {useState} from "react";
import NoDependency from "./useEffect/NoDependency";
import EmptyDependency from "./useEffect/EmptyDependency";
import WithDependency from "./useEffect/WithDependency";
import {NavLink, Outlet, useResolvedPath} from "react-router-dom";
import { FileText, PlayCircle, RefreshCw } from "lucide-react";
const examples = [
	{
		id: "no-dependency",
		title: "No Dependency",
		brief: "Runs on every render, no dependency array.",
		flow: [
			"Component renders",
			"Effect runs",
			"Any state update re-renders",
			"Effect runs again"
		],
		pitfall: "Can cause infinite loops if updating state inside useEffect.",
		component: <NoDependency/>
	},
	{
		id: "empty-dependency",
		title: "Empty Dependency",
		brief: "Runs only once after initial render.",
		flow: [
			"Component renders",
			"Effect runs once",
			"State updates do not trigger it again"
		],
		pitfall: "Forgetting cleanup can cause memory leaks.",
		component: <EmptyDependency/>
	},
	{
		id: "with-dependency",
		title: "With Dependency",
		brief: "Runs when specified dependencies change.",
		flow: [
			"Component renders",
			"Effect runs if dependencies changed",
			"Effect does not run if dependencies remain the same"
		],
		pitfall: "Using objects/arrays as dependencies can cause unnecessary re-renders.",
		component: <WithDependency/>
	}
];

const UseEffect = () => {
	const [selectedExample, setSelectedExample] = useState<string | null>(null);
	const basePath = useResolvedPath("").pathname; // Get current base path
	const closeExample = () => setSelectedExample(null);

	return (
		<div className="p-6 max-w-4xl mx-auto space-y-6">
			{/* 🔹 Page Title */}
			<h1 className="text-4xl font-extrabold text-blue-600">🛠️ Understanding <code>useEffect</code></h1>
			<p className="text-gray-700 text-lg">
				<code>useEffect</code> is a powerful React hook for handling side effects in functional components.
			</p>

			{/* 🔄 Flow of useEffect */}
			<section className="p-5 rounded-lg shadow-md border border-blue-400 bg-blue-50">
				<h2 className="text-xl font-bold text-blue-700">🔄 Flow of <code>useEffect</code></h2>
				<ol className="list-decimal pl-6 space-y-2 text-blue-800 font-medium">
					<li>🟢 Component <span className="font-extrabold">renders</span>.</li>
					<li>⚡ <code>useEffect</code> <span className="font-extrabold">runs after render</span>.</li>
					<li>🔄 If dependencies change, <span className="font-extrabold">it runs again</span>.</li>
					<li>🧹 Before re-running, <span className="font-extrabold">cleanup function executes</span> (if defined).</li>
				</ol>
			</section>

			{/* 🧹 Purpose of Cleanup */}
			<section className="p-5 rounded-lg shadow-md border border-green-400 bg-green-50">
				<h2 className="text-xl font-bold text-green-700">🧹 Purpose of Cleanup Function</h2>
				<p className="text-green-800 font-medium">
					The cleanup function <span className="font-extrabold">prevents memory leaks</span> by removing event listeners, cancelling requests, or clearing timers.
				</p>
				<pre className="bg-gray-900 text-green-200 p-4 rounded-md text-sm mt-3 overflow-x-auto">
{`useEffect(() => {
  const interval = setInterval(() => console.log("Tick"), 1000);

  return () => clearInterval(interval); // ✅ Cleanup on unmount
}, []);`}
        </pre>
			</section>


			{/* 🔹 List of Examples */}
			<section className="bg-white p-5 shadow-md rounded-lg border">
				<h2 className="text-lg font-semibold mb-3 text-gray-700">📌 Examples</h2>
				<div className="space-y-6">
					{examples.map((ex) => (
						<div key={ex.id} className="border rounded-lg p-4 shadow-sm">
							<h3 className="text-lg font-semibold">
								<NavLink to={ex.id}>
									{({ isActive }) => (
										<div
											className={`relative flex items-center gap-3 p-5 rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer
						${isActive ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-600 scale-105 shadow-blue-400"
												: "bg-gray-100 hover:bg-blue-50 border-gray-300 hover:border-blue-500"}`}
										>
											<FileText size={28} className="text-blue-600" />
											<span className="text-lg font-bold">{ex.title}</span>
											{isActive && <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-400 rounded-full"></div>}
										</div>
									)}
								</NavLink>
							</h3>
							<p className="text-gray-700"><strong>Brief:</strong> {ex.brief}</p>
							<h4 className="font-semibold mt-2">Flow:</h4>
							<ul className="list-disc pl-5 text-gray-700">
								{ex.flow.map((step, idx) => <li key={idx}>{step}</li>)}
							</ul>
							<p className="text-red-500 mt-2"><strong>Pitfall:</strong> {ex.pitfall}</p>
						</div>
					))}
				</div>
			</section>
			{/* 🔥 Nested Route Content (Example Panel) */}
			<Outlet/>
		</div>
	);
};

export default UseEffect;
