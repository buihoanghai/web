import React, {createContext, useReducer, ReactNode, useCallback} from "react";
import { messageReducer } from "./messageReducer";

export type MessageStackContextType = {
	messages: { id: string; text: string }[];
	showMessage: (text: string) => void;
	removeMessage: (id: string) => void;
};

export const MessageStackContext = createContext<MessageStackContextType | undefined>(undefined);

export const MessageStackManager = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(messageReducer, { messages: [] });

	const showMessage = useCallback((text: string) => {
		const id = Date.now().toString();
		dispatch({ type: "ADD_MESSAGE", payload: { id, text } });

		setTimeout(() => dispatch({ type: "REMOVE_MESSAGE", payload: id }), 3000);
	},[]);

	const removeMessage = (id: string) => {
		dispatch({ type: "REMOVE_MESSAGE", payload: id });
	};

	return (
		<MessageStackContext.Provider value={{ messages: state.messages, showMessage, removeMessage }}>
			{children}
		</MessageStackContext.Provider>
	);
};
