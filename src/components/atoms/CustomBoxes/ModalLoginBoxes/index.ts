import styled from 'styled-components';
import { ProjectColors } from '../../../../global/configs/colors';

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${ProjectColors.WHITE};
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid ${ProjectColors.BLUE};
  &.title {
    margin: 0 auto;
    width: fit-content;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListInputs = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: column;
`;

const ListInputsItems = styled.li`
  display: flex;
  gap: 0.5rem;
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export { Container, Content, TitleBox, ListInputs, ListInputsItems, ButtonBox };
