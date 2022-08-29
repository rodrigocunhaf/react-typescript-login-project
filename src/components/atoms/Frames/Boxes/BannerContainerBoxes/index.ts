import styled from 'styled-components';

const Container = styled.div``;

const BoxContent = styled.div`
  max-width: 120rem;
  min-width: 20rem;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  height: 580px;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin: 0 0 0 2rem;
  }
`;

export { Container, BoxContent, Content };
