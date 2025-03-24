export type Message = { id: number; text: string };

type State = {
	messages: Message[];
};

type Action =
	| { type: "ADD_MESSAGE"; payload: Message }
	| { type: "REMOVE_MESSAGE"; payload: number };

export const messageReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "ADD_MESSAGE":
			return { messages: [...state.messages, action.payload] };

		case "REMOVE_MESSAGE":
			return { messages: state.messages.filter(msg => msg.id !== action.payload) };

		default:
			return state;
	}
};
