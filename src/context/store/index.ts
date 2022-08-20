import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type AuthenticationType = {
  userName: string | null;
  logged: boolean;
};

const initialState: AuthenticationType = {
  userName: localStorage.getItem('userName') || null,
  logged: Boolean(localStorage.getItem('logged')) || false,
};

type Teste = {
  userName: string;
};

const userSlice = createSlice({
  initialState,
  name: 'authentication',
  reducers: {
    logIn: (state: AuthenticationType, action: PayloadAction<Teste>) => {
      state.logged = true;
      state.userName = action.payload.userName;
      localStorage.setItem('userName', action.payload.userName);
      localStorage.setItem('logged', `${true}`);
    },
    logOff: (state: AuthenticationType) => {
      localStorage.removeItem('userName');
      localStorage.removeItem('logged');
      state.userName = '';
      state.logged = false;
    },
  },
});

export const { logIn, logOff } = userSlice.actions;

const authSlicer = userSlice.reducer;

const store = configureStore({
  reducer: {
    auth: authSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AuthDispath = typeof store.dispatch;

export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuthDispath: () => AuthDispath = useDispatch;

export default store;
