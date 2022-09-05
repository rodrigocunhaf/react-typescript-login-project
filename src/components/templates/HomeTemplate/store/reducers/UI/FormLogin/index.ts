import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionsFormLogin } from '../../../actions/UI/FormLogin';

export type FormLoginState = {
  loginUsername: string;
  loginPassword: string;
  invalidUser: boolean;
};

const initialState: FormLoginState = {
  loginUsername: '',
  loginPassword: '',
  invalidUser: false,
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
        case 'ON_INVALID_SUBMIT_USER':
          return { ...state, invalidUser: true };
        case 'RESET_LOGIN_INPUT':
          return {
            loginPassword: action.payload.newValue,
            loginUsername: action.payload.newValue,
            invalidUser: false,
          };
        default:
          return state;
      }
    },
  },
});

export const { setInput } = FormLoginSlice.actions;

export const formLoginReducers = FormLoginSlice.reducer;
