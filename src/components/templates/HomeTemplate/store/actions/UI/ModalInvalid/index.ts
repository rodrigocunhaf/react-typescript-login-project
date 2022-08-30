export type ActionsModalInvalid = {
  openModal: boolean;
  actionType: string;
};

export const onModalInvalid: ActionsModalInvalid = {
  actionType: 'OPEN_MODAL_INVALID',
  openModal: true,
};

export const offModalInvalid: ActionsModalInvalid = {
  actionType: 'CLOSE_MODAL_INVALID',
  openModal: false,
};
