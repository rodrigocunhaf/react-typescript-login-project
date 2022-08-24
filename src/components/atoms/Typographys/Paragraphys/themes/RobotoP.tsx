import React from 'react';
import styled from 'styled-components';
import { ProjectColors } from '../../../../../global/configs/colors';

type RobotoParagraphyProps = {
  color?: ProjectColors;
  isBold?: boolean;
  fontSize?: number;
};

const Default = styled.p<RobotoParagraphyProps>`
  font-family: Roboto;
  color: ${(props) => props.color && props.color};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'rem' : '1rem')};
  ${(props) => props.isBold && 'font-weight:bold;'}
`;

export { Default };
