import styled from 'styled-components';
import { ProjectColors } from '../../../../global/configs/colors';

type BGPainterProps = {
  color: ProjectColors;
};

const BGPainter = styled.div<BGPainterProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color}};
`;

export { BGPainter };
