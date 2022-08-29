import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PageDispatch, RootStatePage } from '../../..';
import { ActionsFormLogin } from '../../../actions/UI/FormLogin';
import { ActionsModalLogin } from '../../../actions/UI/ModalLogin';

type UIPageState = {
  modalLogin: boolean;
};

const initialState: UIPageState = {
  modalLogin: false,
};

const PageUISlice = createSlice({
  initialState,
  name: 'UI_PAGE_SLICE',
  reducers: {
    modalState: (
      state: UIPageState,
      action: PayloadAction<ActionsModalLogin>
    ) => {
      return { ...state, modalLogin: action.payload.openModal };
    },
  },
});

export const { modalState } = PageUISlice.actions;

const pageUIReducers = PageUISlice.reducer;

export default pageUIReducers;
