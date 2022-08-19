import React from 'react';
import ReactDOMClient from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';

const rootElement = document.getElementById('root') as HTMLElement;

const GlobalStyled = createGlobalStyle`
  @font-face {
    src:url(${process.env.PUBLIC_PATH}/fonts/RobotoCondensed-Regular.ttf);
    font-family:Roboto;
  }
`;

const P = styled.p`
  font-size: 3rem;
  font-family: Roboto;
`;

ReactDOMClient.createRoot(rootElement).render(
  <React.StrictMode>
    <GlobalStyled />
    <P>Inicial Commit</P>
  </React.StrictMode>
);
