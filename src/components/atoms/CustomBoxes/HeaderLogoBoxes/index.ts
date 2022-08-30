import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

const ImageBox = styled.div`
  max-width: 3rem;
  margin-right: 1rem;
  @media screen and (min-width: 768px) {
    max-width: 5rem;
  }
`;

export { Container, ImageBox };
