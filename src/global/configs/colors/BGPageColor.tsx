import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ProjectColors } from '.';

type BGColorType = {
  bgColor: ProjectColors;
};

const BGPageColor = createGlobalStyle<BGColorType>`
  body{
    background-color:${(props) => props.bgColor}
  }
`;

export { BGPageColor };
