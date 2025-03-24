import React, {createContext, useContext, useState, useCallback, useEffect, useRef} from "react";

interface Message {
	id: number;
	text: string;
}

interface MessageContextType {
	showMessage: (text: string) => void;
	activeMessages: Message[];
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageStackProvider = ({children}: { children: React.ReactNode }) => {
	const [messageQueue, setMessageQueue] = useState<Message[]>([]);
	const [activeMessages, setActiveMessages] = useState<Message[]>([]);
	let isProcessing = useRef(false);

	const showMessage = useCallback((text: string) => {
		const id = Date.now() + Math.random();
		setMessageQueue((prev) => [...prev, {id, text}]);
	}, []);
	const showMessageQueue = () => {
		if (isProcessing.current) {
			return;
		} // Prevent duplicate processing

		setMessageQueue(prevQueue => {
			if (isProcessing.current || prevQueue.length === 0) {
				return prevQueue;
			} // Prevent duplicate processing
			isProcessing.current = true;
			const [newMessage, ...restQueue] = prevQueue; // Get first item
			setActiveMessages(prev => [...prev, newMessage]);
			setMessageQueue(restQueue)

			const newQueue = prevQueue.slice(1);
			setTimeout(() => {
				if (newQueue.length === 0) {
					return;
				}
				const [nextMessage, ...restQueue] = newQueue; // Get first item
				setActiveMessages(prev => [...prev, nextMessage]); // Show the message
				setMessageQueue(restQueue);

			}, 1000);
			setTimeout(() => {
				// Move to the next message after 3s
				setActiveMessages(prev => prev.slice(1));
				isProcessing.current = false;
				setMessageQueue(prevQueue => {
					if (prevQueue.length > 0) {
						showMessageQueue();
					} else {
						setTimeout(() => {
							setActiveMessages(prev => prev.slice(1));
						}, 500);
					}
					return prevQueue;
				});
			}, 1500);
			return newQueue;
		});
	}
	useEffect(() => {
		showMessageQueue();
	}, [messageQueue]);

	return (
		<MessageContext.Provider value={{showMessage, activeMessages}}>
			{children}
		</MessageContext.Provider>
	);
};

export const useMessageStack = () => {
	const context = useContext(MessageContext);
	if (!context) {
		throw new Error("useMessageStack must be used within a MessageStackProvider");
	}
	return context;
};
