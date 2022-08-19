import React from 'react';
import styled from 'styled-components';
import { ProjectColors } from '../../../global/configs/colors';
import { HeaderContainer } from '../../molecules/HeaderContainer';
import { LogoHeader, LogoHeaderProps } from '../../molecules/LogoHeader';

export type HeaderLoginProps = {
  content: {
    logo: LogoHeaderProps;
  };
};

const HeaderLogin = ({ content }: HeaderLoginProps) => {
  return (
    <HeaderContainer>
      <LogoHeader
        fileName={content.logo.fileName}
        description={content.logo.description}
        heading={content.logo.heading}
      />
    </HeaderContainer>
  );
};
export { HeaderLogin };
