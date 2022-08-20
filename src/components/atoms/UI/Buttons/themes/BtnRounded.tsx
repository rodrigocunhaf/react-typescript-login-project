import React from 'react';
import styled from 'styled-components';
import { ProjectColors } from '../../../../../global/configs/colors';

type BtnRoundedProps = {
  isBold?: boolean;
  BGColor?: ProjectColors;
  color?: ProjectColors;
};

const Default = styled.button<BtnRoundedProps>`
  font-family: Roboto;
  font-size: 1rem;
  border: 0;
  background-color: ${(props) => props.BGColor};
  color: ${(props) => props.color};
  ${(props) => props.isBold && 'font-weight:bold'};
`;

const Small = styled(Default)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;
export { Default, Small };
