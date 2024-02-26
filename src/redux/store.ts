import { configureStore } from '@reduxjs/toolkit';
import test from './features/test'

export const store = configureStore({
	reducer: {
		test,
	},
	devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
