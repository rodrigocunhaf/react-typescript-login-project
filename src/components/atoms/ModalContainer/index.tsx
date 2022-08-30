import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ProjectColors } from '../../../global/configs/colors';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${ProjectColors.WHITE};
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const modal = document.getElementById('root')! as HTMLElement;

  return ReactDOM.createPortal(
    <ModalContainer id="modal">{children}</ModalContainer>,
    modal
  );
};

export { Modal };
