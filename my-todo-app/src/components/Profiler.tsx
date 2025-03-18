import React, { Profiler as ReactProfiler, useLayoutEffect, useEffect, useRef } from "react";

interface ProfilerProps {
	id: string;
	children: React.ReactNode;
	onProfileUpdate?: (steps: string[]) => void;
}

const Profiler: React.FC<ProfilerProps> = ({ id, children, onProfileUpdate }) => {
	const stepsRef = useRef<string[]>([]);

	// 🌟 Track Render Phase
	const handleRender = (id: string, phase: "mount" | "update", actualDuration: number) => {
		stepsRef.current.push(`🌀 [Render Phase]`);
		stepsRef.current.push(`   ├─ Component <${id}> ${phase === "mount" ? "Mounted" : "Updated"}`);
		stepsRef.current.push(`   ├─ Virtual DOM is created`);
		stepsRef.current.push(`   ├─ React performs Diffing`);
		stepsRef.current.push(`   ├─ Render completed in ${actualDuration.toFixed(2)}ms`);
		onProfileUpdate?.([...stepsRef.current]);
	};

	// 🌟 Track Layout Effect Phase
	useLayoutEffect(() => {
		stepsRef.current.push(`📌 [Layout Effect Phase]`);
		stepsRef.current.push(`   ├─ Runs BEFORE browser paints UI`);
		stepsRef.current.push(`   └─ Can manipulate DOM before user sees changes`);
		onProfileUpdate?.([...stepsRef.current]);
	});

	// 🌟 Track Commit Phase (DOM Update & Effects)
	useEffect(() => {
		stepsRef.current.push(`✅ [Commit Phase]`);
		stepsRef.current.push(`   ├─ React updates Real DOM`);
		stepsRef.current.push(`   ├─ Browser paints UI`);
		stepsRef.current.push(`   └─ Component is now interactive`);
		onProfileUpdate?.([...stepsRef.current]);
	});

	return (
		<ReactProfiler id={id} onRender={handleRender}>
			{children}
		</ReactProfiler>
	);
};

export default Profiler;
