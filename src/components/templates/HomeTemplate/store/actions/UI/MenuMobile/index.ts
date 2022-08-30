export type ActionsMenuMobile = {
  type: string;
  open: boolean;
};

export const openMenuMobile: ActionsMenuMobile = {
  type: 'MENU_MOBILE_OPEN',
  open: true,
};

export const closeMenuMobile: ActionsMenuMobile = {
  type: 'MENU_MOBILE_CLOSE',
  open: false,
};
