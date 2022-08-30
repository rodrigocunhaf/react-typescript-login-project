import React from 'react';
import styled from 'styled-components';

type RobotoParagraphyProps = {
  isBold?: boolean;
};

const RobotoP = styled.p<RobotoParagraphyProps>`
  font-family: Roboto;
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.fontSize};
  ${(props) => props.isBold && 'font-weight:bold;'}
`;

RobotoP.defaultProps = {
  theme: {
    fontColor: 'black',
    fontSize: '1rem',
  },
};

export default RobotoP;
