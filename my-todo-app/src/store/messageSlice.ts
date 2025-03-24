import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Message = { id: string; text: string };

type MessageState = {
	messages: Message[];
};

const initialState: MessageState = { messages: [] };

const messageSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		// ✅ Adds a message to the state
		addMessage: (state, action: PayloadAction<Message>) => {
			state.messages.push(action.payload);
		},

		// ✅ Removes a message by ID
		removeMessage: (state, action: PayloadAction<string>) => {
			state.messages = state.messages.filter((msg) => msg.id !== action.payload);
		},

		// ✅ Triggered by components (handled by Saga)
		showMessage: (state, action: PayloadAction<string>) => {},
	},
});

export const { addMessage, removeMessage, showMessage } = messageSlice.actions;
export default messageSlice.reducer;
