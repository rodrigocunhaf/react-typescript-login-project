import styled from 'styled-components';
import { ProjectColors } from '../../../global/configs/colors';

const BGPainter = styled.div`
  min-width:20rem;
  width:100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor}};
`;

BGPainter.defaultProps = {
  theme: {
    bgColor: ProjectColors.WHITE,
  },
};

export default BGPainter;
