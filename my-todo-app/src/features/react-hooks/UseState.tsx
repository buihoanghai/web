import React, { useState } from "react";
import ReconciliationFlow from "./ReconciliationFlow";
import { motion } from "framer-motion";
import {codeExample} from "./codeExample.ts";
import CodeSnippet from "../../components/CodeSnippet.tsx";


const UseStateDemo: React.FC = () => {
	const [count, setCount] = useState(0);
	const [flowType, setFlowType] = useState<"increment" | "reset" | "mounted" | null>("mounted");
	const [isRunning, setIsRunning] = useState(false);

	const handleIncrement = () => {
		if (!isRunning) {
			setFlowType("increment");
			setCount(count + 1);
		}
	};

	const handleReset = () => {
		if (!isRunning) {
			setFlowType("reset");
			setCount(0);
		}
	};

	return (
		<div className="flex h-screen">
			{/* Main Content */}
			<div className="flex-1 max-w-3xl mx-auto p-6">
				<h1 className="text-2xl font-bold mb-4">🔹 Understanding useState</h1>
				<p className="mb-4 text-gray-700">
					The <code>useState</code> hook allows us to add state to functional components.
					When the state updates, React triggers a re-render and follows its reconciliation process.
				</p>

				{/* Code Snippet */}
				<CodeSnippet code={codeExample.useState}/>

				{/* Counter UI */}
				<div className="bg-white p-6 shadow-lg rounded-lg text-center">
					{isRunning ? <p className="text-lg font-semibold animate-pulse">
						Updating<span className="dots">...</span>
					</p> : <p className="text-lg font-semibold">Current Count: {count}</p>}
					<div className="mt-4 space-x-4">
						<motion.button
							whileTap={{ scale: 0.9 }}
							onClick={handleIncrement}
							disabled={isRunning}
							className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
						>
							➕ Increment
						</motion.button>
						<motion.button
							whileTap={{ scale: 0.9 }}
							onClick={handleReset}
							disabled={isRunning}
							className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50"
						>
							🔄 Reset
						</motion.button>
					</div>
				</div>
			</div>

			{/* Right Sidebar - Reconciliation Flow */}
			<ReconciliationFlow
				count={count}
				flowType={flowType}
				onComplete={() => setFlowType(null)}
				setIsRunning={setIsRunning}
			/>
		</div>
	);
};

export default UseStateDemo;
