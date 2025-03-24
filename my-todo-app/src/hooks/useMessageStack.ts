import {useSyncExternalStore} from "react";

interface Message {
	id: number;
	text: string;
}

// ✅ Store state (singleton)
let globalState: Message[] = [];
let listeners: (() => void)[] = [];

// ✅ Subscribe function (React will call this)
const subscribe = (callback: () => void) => {
	listeners.push(callback);
	return () => {
		listeners = listeners.filter((l) => l !== callback);
	};
};

// ✅ Getter function (React will call this)
const getSnapshot = () => globalState;

// ✅ Function to update state
export const showMessage = (text: string) => {
	const message: Message = {
		id: Date.now() + Math.random(),
		text
	}
	globalState = [...globalState, message]; // Always return a new array
	listeners.forEach((listener) => listener()); // Notify subscribers
};

// ✅ Custom hook for consuming the store
export const useMessageStack = () => useSyncExternalStore(subscribe, getSnapshot);
