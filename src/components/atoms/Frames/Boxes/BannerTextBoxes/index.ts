import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  margin-right: auto;
  opacity: 0;
  animation-name: effect;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  margin: 3rem 0 0 0;
  width: 50%;

  @keyframes effect {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const BoxTitle = styled.div`
  margin: 0 auto 3rem auto;

  h2 {
    font-size: 3rem;
  }
`;

const BoxParagraphy = styled.div`
  max-width: 36rem;

  p {
    line-height: 1.5rem;
    font-size: 1.2rem;
  }
`;

export { Container, BoxTitle, BoxParagraphy };
