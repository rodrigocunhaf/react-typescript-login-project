import styled from 'styled-components';
import { ProjectColors } from '../../../../global/configs/colors';

const Container = styled.div`
  background-color: ${ProjectColors.WHITE};
  min-width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 415px) {
    max-width: 30rem;
    margin: 0 auto;
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid ${ProjectColors.BLUE};
  }
`;

const TitleBox = styled.div`
  h2 {
    margin-left: 1rem;
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ValidationList = styled.ul`
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ValidationListItem = styled.li``;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export {
  Container,
  TitleBox,
  Content,
  ValidationList,
  ValidationListItem,
  ButtonBox,
};
