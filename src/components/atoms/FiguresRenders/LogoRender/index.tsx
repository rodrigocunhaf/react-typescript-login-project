import React from 'react';
import styled from 'styled-components';

export type LogoImageProps = {
  fileName: string;
  description: string;
};

const LogoImage = styled.img<LogoImageProps>`
  width: 100%;
`;

export const LogoRender = styled(LogoImage).attrs<LogoImageProps>((props) => ({
  src: `${process.env.PUBLIC_PATH}/images/icons/${props.fileName}`,
  alt: props.description,
}))``;
