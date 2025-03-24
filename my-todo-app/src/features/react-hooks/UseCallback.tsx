import React, {useState, useCallback, useEffect} from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "../../store/messageSlice";
// 🔹 Child Component WITHOUT `useCallback` (Always Re-renders)
const ChildComponentWithoutUseCallback = ({ handleClick }: { handleClick: () => void }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showMessage("❌ Child Component Without useCallback Rendered!"));
	});
	return <button onClick={handleClick} className="px-4 py-2 bg-red-500 text-white rounded">Without useCallback</button>;
};
// Child Component that receives a memoized function
const ChildComponent = React.memo(({handleClick}: { handleClick: () => void }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(showMessage("Child Component useCallback Mounted!"));
	});
	return <button onClick={handleClick}>Click Me</button>;
});

const UseCallback: React.FC = () => {
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();
	// Memoized function to prevent unnecessary re-renders
	const handleClick = useCallback(() => {
		dispatch(showMessage("Button Clicked!"));
	}, []);
	const handleClickWithoutUseCallback = () => {
		dispatch(showMessage("❌ Button Without useCallback Clicked!"));
	};

	useEffect(() => {
		dispatch(showMessage(`Count: ${count}`));
	}, [count]);  // ✅ Runs only when `count` changes

	const onClick = () => {
		setCount(prev => prev + 1)
	};
	return (
		<div className=" theme-container p-6 shadow-md rounded-lg max-w-4xl mx-auto mt-10 relative bg-white text-black">
			{/* 🔹 Brief */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Brief</h3>
				<p>
					The <code className="bg-gray-100 p-1 rounded">useCallback</code> hook memoizes a function to prevent its
					recreation
					on each render, optimizing performance by avoiding unnecessary re-renders of child components.
				</p>
			</section>

			{/* 🔹 Syntax */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Syntax</h3>
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="text-sm text-gray-800">
            {`
const memoizedFunction = useCallback(() => {
  // Function logic
}, [dependencies]);
            `}
          </code>
        </pre>
			</section>

			{/* 🔹 Use Case 1: Prevent Child Re-renders */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Example: Preventing Unnecessary Child Re-renders</h3>
				<p>
					Without <code>useCallback</code>, functions passed as props get recreated on every render, causing child
					components to re-render.
					Here’s an optimized example:
				</p>
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="text-sm text-gray-800">
            {`
const handleClick = useCallback(() => {
  addMessage("Button Clicked!");
}, []);
            `}
          </code>
        </pre>
			</section>

			{/* 🔹 Use Case 2: Avoid Expensive Function Recreation */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Example: Avoiding Expensive Function Re-Creation</h3>
				<p>
					If a function performs expensive calculations, <code>useCallback</code> ensures it's only recalculated when
					necessary.
				</p>
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="text-sm text-gray-800">
            {`
const expensiveFunction = useCallback(() => {
  addMessage("Performing expensive calculation...");
  return count * 2;
}, [count]);
            `}
          </code>
        </pre>
			</section>

			{/* 🔹 Pitfalls */}
			<section className="mb-6">
				<h3 className="text-xl font-semibold mb-2">Pitfalls</h3>
				<ul className="list-disc list-inside">
					<li>❌ Overusing <code>useCallback</code> can reduce readability.</li>
					<li>❌ If dependencies frequently change, it doesn't improve performance.</li>
				</ul>
			</section>

			{/* 🔹 Button Interaction */}
			<div className="space-x-4">
				<button
					onClick={onClick}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
				>
					Increment Count ({count})
				</button>
				<ChildComponent handleClick={handleClick}/>
				<ChildComponentWithoutUseCallback handleClick={handleClickWithoutUseCallback}/>
			</div>
		</div>
	);
};

export default UseCallback;
