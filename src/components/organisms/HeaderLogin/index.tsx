import React from 'react';
import { HeaderContainer } from '../../molecules/HeaderContainer';
import { HeaderDisplayLogin } from '../../molecules/HeaderDisplayLogin';
import { HeaderDisplayLogout } from '../../molecules/HeaderDisplayLogout';
import { HeaderLogo, LogoHeaderProps } from '../../molecules/HeaderLogo';
import { ModalInvalid } from '../../molecules/ModalInvalid';
import { ModalLogin } from '../../molecules/ModalLogin';
import { useHomeSelector } from '../../templates/HomeTemplate/store';

export type HeaderLoginProps = {
  content: {
    logo: LogoHeaderProps;
  };
};

const HeaderLogin = ({ content }: HeaderLoginProps) => {
  const homeSelector = useHomeSelector((state) => state);

  return (
    <HeaderContainer>
      <HeaderLogo
        fileName={content.logo.fileName}
        description={content.logo.description}
        heading={content.logo.heading}
      />
      {homeSelector.auth.logged === false && <HeaderDisplayLogin />}
      {homeSelector.auth.logged === true && (
        <HeaderDisplayLogout username={`${homeSelector.auth.username}`} />
      )}
      <ModalLogin />
      <ModalInvalid />
    </HeaderContainer>
  );
};
export { HeaderLogin };
