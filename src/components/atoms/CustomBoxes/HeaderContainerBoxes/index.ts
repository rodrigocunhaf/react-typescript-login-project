import styled from 'styled-components';

const Header = styled.header``;

const HeaderContainer = styled.div`
  max-width: 120rem;
  min-width: 20rem;
  margin: 0 auto;
`;

const HeaderContent = styled.div`
  margin: 0 2rem;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export { Header, HeaderContainer, HeaderContent };
