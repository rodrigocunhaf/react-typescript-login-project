import styled from 'styled-components';

const Container = styled.form`
  display: none;
  @media screen and (min-width: 1024px) {
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

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ListInputsItems = styled.li`
  label {
    flex-direction: row;
    align-items: center;
    input {
      margin-left: 0.5rem;
    }
  }
`;

export { Container, ListInputs, ListInputsItems };
