import { takeEvery, put, delay } from "redux-saga/effects";
import { addMessage, removeMessage, showMessage } from "./messageSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // ✅ Generate unique message IDs

// ✅ Saga function to handle `triggerAddMessage`
function* handleAddMessage(action: PayloadAction<string>) {
	const messageId = uuidv4(); // Generate a unique ID

	// ✅ Dispatch `addMessage` to store the message
	yield put(addMessage({ id: messageId, text: action.payload }));

	// ✅ Wait for 3 seconds before removing the message
	yield delay(3000);

	// ✅ Dispatch `removeMessage` to clear the message
	yield put(removeMessage(messageId));
}

// ✅ Watcher saga: Listens for `triggerAddMessage`
export default function* messageSaga() {
	yield takeEvery(showMessage.type, handleAddMessage);
}
