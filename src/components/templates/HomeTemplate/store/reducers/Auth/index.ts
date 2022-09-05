import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCookie, setCookie } from '../../../../../../utils/cookie';
import { ActionsAuth } from '../../actions/Auth';

type AuthState = {
  logged: boolean;
  username: string;
};

const initialState: AuthState = {
  logged: getCookie('username') ? true : false,
  username: getCookie('username') || '',
};

const AuthSlice = createSlice({
  initialState,
  name: 'AuthSlice',
  reducers: {
    authentication: (
      state: AuthState,
      action: PayloadAction<ActionsAuth>
    ): AuthState => {
      switch (action.payload.type) {
        case 'LOGIN':
          sessionStorage.setItem(
            action.payload.data.localStorageName,
            action.payload.data.username
          );
          setCookie(action.payload.data.username);
          return {
            logged: action.payload.data.logged,
            username: action.payload.data.username,
          };
        case 'LOGOUT':
          localStorage.removeItem(action.payload.data.localStorageName);
          return {
            logged: action.payload.data.logged,
            username: action.payload.data.username,
          };
        default:
          return state;
      }
    },
  },
});

export const { authentication } = AuthSlice.actions;

const authReducer = AuthSlice.reducer;

export default authReducer;
