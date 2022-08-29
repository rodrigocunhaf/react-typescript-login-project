import styled from 'styled-components';
import { ProjectColors } from '../../../../../global/configs/colors';

const Container = styled.div`
  display: flex;
  padding: 0.3rem 1rem 0.3rem 1rem;
  gap: 1rem;
  background-color: ${ProjectColors.WHITE};
  width: fit-content;
  margin: 1rem auto 0 auto;
  border-radius: 3.125rem;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    transform: scale(1.3);
  }
`;

export { Container };
