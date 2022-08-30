import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './reducers/Auth';
import { formLoginReducers } from './reducers/UI/FormLogin';
import menuMobileReducer from './reducers/UI/MenuMobile';
import pageUIReducers from './reducers/UI/ModalLogin';

const store = configureStore({
  reducer: {
    menuMobile: menuMobileReducer,
    auth: authReducer,
    UI: pageUIReducers,
    formLogin: formLoginReducers,
  },
});

export type RootStatePage = ReturnType<typeof store.getState>;

export type PageDispatch = typeof store.dispatch;

export const useHomeDispatch: () => PageDispatch = useDispatch;

export const useHomeSelector: TypedUseSelectorHook<RootStatePage> = useSelector;

export default store;
