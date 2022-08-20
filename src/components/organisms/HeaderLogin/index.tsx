import React, { useEffect } from 'react';
import { useAuthSelector } from '../../../context/store';
import { HeaderContainer } from '../../molecules/HeaderContainer';
import {
  HeaderDisplayLogin,
  HeaderDisplayLoginProps,
} from '../../molecules/HeaderDisplayLogin';
import { HeaderLogo, LogoHeaderProps } from '../../molecules/HeaderLogo';

export type HeaderLoginProps = {
  content: {
    logo: LogoHeaderProps;
    login: HeaderDisplayLoginProps;
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
        <div>
          <p>Olá,{auth.userName}</p>
        </div>
      )}
    </HeaderContainer>
  );
};
export { HeaderLogin };
