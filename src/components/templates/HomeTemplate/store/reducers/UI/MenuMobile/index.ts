import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionsMenuMobile } from '../../../actions/UI/MenuMobile';

type MenuMobileState = {
  open: boolean;
};

const initialState: MenuMobileState = {
  open: false,
};

const MenuMobileSlice = createSlice({
  initialState,
  name: 'MenuMobileSlice',
  reducers: {
    menuMobileState: (state, action: PayloadAction<ActionsMenuMobile>) => {
      return { ...state, open: action.payload.open };
    },
  },
});

const menuMobileReducer = MenuMobileSlice.reducer;

export const { menuMobileState } = MenuMobileSlice.actions;

export default menuMobileReducer;
