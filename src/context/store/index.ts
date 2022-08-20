import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducers from '../reducers/authReducers';

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AuthDispath = typeof store.dispatch;

export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuthDispath: () => AuthDispath = useDispatch;

export default store;
