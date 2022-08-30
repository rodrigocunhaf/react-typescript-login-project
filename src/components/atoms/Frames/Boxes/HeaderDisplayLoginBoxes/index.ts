import styled from 'styled-components';

const Container = styled.div``;

const Desktop = styled.div`
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
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &.title {
    margin: 0 auto;
    width: fit-content;
  }
`;

const ButtonModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  ListInputs,
  ListInputsItems,
  Desktop,
  Mobile,
  ModalContent,
  ButtonModalBox,
};
