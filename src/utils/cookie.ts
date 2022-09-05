export const setCookie = (username: string) => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const nextDate = currentDate.getDate() + 7;
  const CookieExpire = new Date(year, month, nextDate);
  document.cookie = `username=${username}; expires=${CookieExpire}`;
};

export const getCookie = (cookieName: string) => {
  const documentCookies = document.cookie;
  const arrayCookie = documentCookies.split(';');

  const KeysValueSeparate = arrayCookie.map((item) => {
    let teste = item.trim().split('=');

    let keyName: string = teste[0];
    let valueName: string = teste[1];

    let cookie = {
      keyName,
      valueName,
    };
    return cookie;
  });

  const findedCookies = KeysValueSeparate.find(
    (cookie) => cookie.keyName === cookieName
  );

  return findedCookies?.valueName;
};
