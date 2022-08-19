import React from 'react';
import { createGlobalStyle } from 'styled-components';

const FontsConfig = createGlobalStyle`
  @font-face {
    src:url(${process.env.PUBLIC_PATH}/fonts/RobotoCondensed-Regular.ttf);
    font-family:Roboto;
  }
`;

export { FontsConfig };
