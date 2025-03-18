import React, {useEffect, useState, useRef} from "react";
import {motion} from "framer-motion";

interface ReconciliationFlowProps {
	count: number;
	flowType: "increment" | "reset" | 'mounted' | null;
	onComplete: () => void;
	setIsRunning: (value: boolean) => void;
}

type Phase = {
	phase: "schedules" | "render" | "commit";
	text: string;
}
const ReconciliationFlow: React.FC<ReconciliationFlowProps> = ({
	                                                               count,
	                                                               flowType,
	                                                               onComplete,
	                                                               setIsRunning,
                                                               }) => {
	const previousCount = useRef<number | null>(null);
	const [steps, setSteps] = useState<Phase[]>([]);
	const timeouts = useRef<NodeJS.Timeout[]>([]);

	useEffect(() => {
		let phases: Phase[];
		if (!flowType) {
			return;
		}
		setIsRunning(true);
		if (flowType === 'mounted') {
			phases = [
				{phase: "schedules", text: `Counter is mounted`},
			];
		} else {
			phases = [
				{phase: "schedules", text: `🟢 Trigger: ${flowType === "increment" ? "Increment" : "Reset"} clicked`},
				{phase: "schedules", text: `🔄 setCount(${flowType === "increment" ? count : 0}) called`},
				{phase: "schedules", text: "🔄 React schedules an update for Counter"},
				{phase: "render", text: "🌀 [Render Phase]"},
				{phase: "render", text: "🔧 Virtual DOM is re-generated"},
				{phase: "render", text: "⚖️ Diffing: Comparing new Virtual DOM with previous"},
			];
			if (flowType === "reset" && count === previousCount.current) {
				phases.push(
					{phase: "render", text: "🖥️ No Change Detected ✅"},
				);
			} else {
				phases = [...phases,
					{phase: "render", text: "🖥️ Change Detected ✅"},
					{phase: "commit", text: "✅ [Commit Phase]"},
					{phase: "commit", text: "🖥️ Updating Real DOM 🔄"},
					{phase: "commit", text: "🎨 Browser paints the new UI"},
					{phase: "commit", text: "💡 Component becomes interactive"},
				];
			}
		}

		previousCount.current = count;
		setSteps([]);

		const timeWait = 500;
		phases.forEach((step, index) => {
			const timeout = setTimeout(() => {
				setSteps((prev) => [...prev, step]);
			}, (index + 1) * timeWait);
			timeouts.current.push(timeout);
		});

		const completeTimeout = setTimeout(() => {
			setIsRunning(false);
			onComplete();
		}, (phases.length) * timeWait);
		timeouts.current.push(completeTimeout);

		return () => {
			timeouts.current.forEach(clearTimeout);
			timeouts.current = [];
		};
	}, [flowType, count]);

	return (
		<div className="p-4 bg-white border-l shadow-lg w-80 h-full overflow-auto">
			<h3 className="text-lg font-semibold mb-4 border-b pb-2 text-center">⚛️ Reconciliation Flow</h3>
			<div className="space-y-2">
				{steps.map((step, index) => (
					<motion.div
						key={index}
						initial={{opacity: 0, x: -10}}
						animate={{opacity: 1, x: 0}}
						transition={{duration: 0.5}}
						className={`text-sm p-2 rounded-md shadow-md  text-white ${
							step.phase === "schedules" ? "bg-red-950" : (step.phase === "render" ? "bg-blue-500" : "bg-green-500")
						}`}
					>
						{step.text}
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ReconciliationFlow;
