export type ActionsModalLogin = {
  openModal: boolean;
  actionType: string;
};

export const onModal: ActionsModalLogin = {
  actionType: 'OPEN_MODAL_LOGIN',
  openModal: true,
};

export const offModal: ActionsModalLogin = {
  actionType: 'CLOSE_MODAL_LOGIN',
  openModal: false,
};
