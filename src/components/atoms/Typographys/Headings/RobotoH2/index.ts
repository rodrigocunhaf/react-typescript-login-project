import React from 'react';
import styled from 'styled-components';
import { ProjectColors } from '../../../../../global/configs/colors';

const RobotoH2 = styled.h2`
  font-family: Roboto;
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.fontColor};
`;

RobotoH2.defaultProps = {
  theme: {
    fontColor: 'black',
  },
};

export default RobotoH2;
