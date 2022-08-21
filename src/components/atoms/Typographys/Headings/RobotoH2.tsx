import React from 'react';
import styled from 'styled-components';
import { ProjectColors } from '../../../../global/configs/colors';

type FontProps = {
  color: ProjectColors;
};

const Default = styled.h2<FontProps>`
  font-family: Roboto;
  color: ${(props) => props.color};
`;

export { Default };
