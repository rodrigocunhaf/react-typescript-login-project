import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionsModalInvalid } from '../../../actions/UI/ModalInvalid';

type ModalInvalidState = {
  open: boolean;
};

const initialState: ModalInvalidState = {
  open: false,
};

const ModalInvalidSlice = createSlice({
  initialState,
  name: 'ModalInvalidSlice',
  reducers: {
    modalInvalidState: (state, action: PayloadAction<ActionsModalInvalid>) => {
      return { ...state, open: action.payload.openModal };
    },
  },
});

export const { modalInvalidState } = ModalInvalidSlice.actions;

const modalInvalidReducers = ModalInvalidSlice.reducer;

export default modalInvalidReducers;
