import React from 'react';
import { createGlobalStyle } from 'styled-components';

const PageConfig = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html {
    height:100%;
    font-size:100%;
  }

  body, #root {
    height:100%;
  }
`;

export { PageConfig };
