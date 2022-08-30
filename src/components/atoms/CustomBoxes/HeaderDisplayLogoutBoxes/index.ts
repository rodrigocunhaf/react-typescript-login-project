import styled from 'styled-components';
import { ProjectColors } from '../../../../global/configs/colors';

const Container = styled.div`
  position: relative;
  bottom: 1.1rem;
  margin-left: auto;

  @media screen and (min-width: 1024px) {
    position: unset;
  }
`;

const Desktop = styled.div`
  display: none;
  background-color: ${ProjectColors.WHITE};
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-left: auto;
  }
`;

const Mobile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 2rem;
  margin-left: auto;
`;

const MobileMenuIconBox = styled.div`
  max-width: 2rem;
`;

const MobileInfoContainer = styled.div`
  border: 1px solid black;
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ProjectColors.WHITE};
  z-index: 2;
`;

const WelcomeBox = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export {
  Container,
  Desktop,
  Mobile,
  MobileMenuButtonBox,
  MobileMenuIconBox,
  MobileInfoContainer,
  WelcomeBox,
};
