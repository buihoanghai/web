import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import messageReducer from "./messageSlice.ts";
import messageSaga from "./messageSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		messages: messageReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(messageSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
