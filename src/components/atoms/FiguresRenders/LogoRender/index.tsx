import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 100%;
`;

export type LogoRenderProps = {
  fileName: string;
  description: string;
};

const LogoRender = ({ fileName, description }: LogoRenderProps) => {
  return (
    <LogoImage
      src={`${process.env.PUBLIC_PATH}/images/icons/${fileName}`}
      alt={description}
    />
  );
};

export { LogoRender };
