export type ActionsFormLogin = {
  newValue: string;
  actionType: string;
};

export const changeUsername = (value: string): ActionsFormLogin => {
  return {
    actionType: 'ON_CHANGE_USERNAME_LOGIN_INPUT',
    newValue: value,
  };
};

export const changePassword = (value: string): ActionsFormLogin => {
  return {
    actionType: 'ON_CHANGE_PASSWORD_LOGIN_INPUT',
    newValue: value,
  };
};

export const resetAllInputsLogin = (): ActionsFormLogin => {
  return {
    actionType: 'RESET_LOGIN_INPUT',
    newValue: '',
  };
};
