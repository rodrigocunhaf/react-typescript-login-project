export type ActionsAuth = {
  type: string;
  data: {
    logged: boolean;
    username: string;
    localStorageName: string;
  };
};

export const logMe = (username: string): ActionsAuth => {
  return {
    type: 'LOGIN',
    data: {
      logged: true,
      username,
      localStorageName: 'username',
    },
  };
};

export const logMeOut = (): ActionsAuth => {
  return {
    type: 'LOGOUT',
    data: {
      logged: false,
      username: '',
      localStorageName: 'username',
    },
  };
};
