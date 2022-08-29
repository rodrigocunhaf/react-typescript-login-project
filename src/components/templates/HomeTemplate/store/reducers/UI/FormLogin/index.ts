import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStatePage } from '../../..';
import { ActionsFormLogin } from '../../../actions/UI/FormLogin';

export type FormLoginState = {
  loginUsername: string;
  loginPassword: string;
};

const initialState: FormLoginState = {
  loginUsername: '',
  loginPassword: '',
};

const FormLoginSlice = createSlice({
  initialState,
  name: 'FormLoginSlice',
  reducers: {
    setInput: (
      state: FormLoginState,
      action: PayloadAction<ActionsFormLogin>
    ) => {
      switch (action.payload.actionType) {
        case 'ON_CHANGE_USERNAME_LOGIN_INPUT':
          return { ...state, loginUsername: action.payload.newValue };
        case 'ON_CHANGE_PASSWORD_LOGIN_INPUT':
          return { ...state, loginPassword: action.payload.newValue };
        case 'RESET_LOGIN_INPUT':
          return {
            loginPassword: action.payload.newValue,
            loginUsername: action.payload.newValue,
          };
        default:
          return state;
      }
    },
  },
});

export const { setInput } = FormLoginSlice.actions;

export const formLoginReducers = FormLoginSlice.reducer;
