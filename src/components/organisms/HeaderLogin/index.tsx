import React, { useEffect } from 'react';
import { useAuthSelector } from '../../../context/store';
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

export type HeaderLoginProps = {
  content: {
    logo: LogoHeaderProps;
    login: HeaderDisplayLoginProps;
    logout: HeaderDisplayLogoutBtn;
  };
};

const HeaderLogin = ({ content }: HeaderLoginProps) => {
  const auth = useAuthSelector((state) => state.auth);

  return (
    <HeaderContainer>
      <HeaderLogo
        fileName={content.logo.fileName}
        description={content.logo.description}
        heading={content.logo.heading}
      />
      {auth.logged === false && (
        <HeaderDisplayLogin
          buttonText={content.login.buttonText}
          inputsList={content.login.inputsList}
        />
      )}
      {auth.logged === true && (
        <HeaderDisplayLogout
          username={`${auth.userName}`}
          logoutButton={content.logout}
        />
      )}
    </HeaderContainer>
  );
};
export { HeaderLogin };
