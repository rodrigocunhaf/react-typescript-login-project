import React from 'react';

import { HeaderContainer } from '../../molecules/HeaderContainer';
import {
  HeaderDisplayLogin,
  HeaderDisplayLoginProps,
} from '../../molecules/HeaderDisplayLogin';
import {
  HeaderDisplayLogout,
  HeaderDisplayLogoutBtn,
} from '../../molecules/HeaderDisplayLogout';
import { HeaderLogo, LogoHeaderProps } from '../../molecules/HeaderLogo';
import { useHomeSelector } from '../../templates/HomeTemplate/store';

export type HeaderLoginContent = {
  content: {
    logo: LogoHeaderProps;
  };
};

export type HeaderLoginUIContent = {
  UIcontent: {
    login: HeaderDisplayLoginProps;
    logout: HeaderDisplayLogoutBtn;
  };
};

export type HeaderLoginProps = HeaderLoginContent & HeaderLoginUIContent;

const HeaderLogin = ({ content, UIcontent }: HeaderLoginProps) => {
  const homeSelector = useHomeSelector((state) => state);

  return (
    <HeaderContainer>
      <HeaderLogo
        fileName={content.logo.fileName}
        description={content.logo.description}
        heading={content.logo.heading}
      />

      {homeSelector.auth.logged === false && (
        <HeaderDisplayLogin
          buttonText={UIcontent.login.buttonText}
          inputsList={UIcontent.login.inputsList}
        />
      )}

      {homeSelector.auth.logged === true && (
        <HeaderDisplayLogout
          username={`${homeSelector.auth.username}`}
          logoutButton={UIcontent.logout}
        />
      )}
    </HeaderContainer>
  );
};
export { HeaderLogin };
