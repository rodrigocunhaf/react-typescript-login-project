import React from 'react';
import styled from 'styled-components';
import { ProjectColors } from '../../../../global/configs/colors';

type FontProps = {
  color: ProjectColors;
};

const RobotoH1 = styled.h1<FontProps>`
  font-family: Roboto;
  color: ${(props) => props.color};
`;

export { RobotoH1 };
