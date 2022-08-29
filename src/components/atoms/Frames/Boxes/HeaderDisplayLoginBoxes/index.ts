import styled from 'styled-components';

const Container = styled.div``;

const Desktop = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 0.5rem;
  }
`;

const ListInputs = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ListInputsItems = styled.li`
  display: flex;
  gap: 0.5rem;
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 768px) {
    label {
      flex-direction: row;
      align-items: center;
      input {
        margin-left: 0.5rem;
      }
    }
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export { Container, ListInputs, ListInputsItems, Desktop, Mobile };
