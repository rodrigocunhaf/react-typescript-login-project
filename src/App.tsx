import React from 'react';
import styled from 'styled-components';
import { ProjectColors } from './global/configs/colors';
import { BGPageColor } from './global/configs/colors/BGPageColor';
import { FontsConfig } from './global/configs/fonts';
import { PageConfig } from './global/configs/html';

const P = styled.p`
  font-size: 3rem;
  font-family: Roboto;
`;

const App = () => {
  return (
    <>
      <FontsConfig />
      <PageConfig />
      <BGPageColor bgColor={ProjectColors.BLUE} />
      <P>Inicial Commit</P>
    </>
  );
};

export { App };
