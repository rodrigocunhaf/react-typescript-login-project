import styled from 'styled-components';
import { ProjectColors } from '../../../../../global/configs/colors';

const RobotoH1 = styled.h1`
  font-family: Roboto;
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.fontSize};
`;

RobotoH1.defaultProps = {
  theme: {
    fontColor: ProjectColors.BLUE,
    fontSize: '1rem',
  },
};

export default RobotoH1;
