import React from 'react';
import { FooterContainer } from '../../molecules/FooterContainer';
import { FooterLogo, FooterLogoProps } from '../../molecules/FooterLogo';
import { FooterSocial } from '../../molecules/FooterSocial';

export type FooterDefaultProps = {
  content: {
    logo: FooterLogoProps;
  };
};

const FooterDefault = ({ content }: FooterDefaultProps) => {
  return (
    <FooterContainer>
      <FooterLogo image={content.logo.image} title={content.logo.title} />
      <FooterSocial />
    </FooterContainer>
  );
};

export { FooterDefault };
