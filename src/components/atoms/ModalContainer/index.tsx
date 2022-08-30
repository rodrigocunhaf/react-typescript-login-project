import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ProjectColors } from '../../../global/configs/colors';

type ModalContainerProps = {
  desktop: boolean;
};

const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  z-index: 1;
  background-color: ${ProjectColors.TRANSPARENT};
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  min-width:20rem;
}

 ${(props) =>
   props.desktop === false &&
   `
    @media screen and (min-width: 1024px) {
    display: none;
  }`}
`;

const Modal = ({
  children,
  id,
}: {
  id: string;
  children?: React.ReactNode;
}) => {
  const modal = document.getElementById('root')! as HTMLElement;

  if (id === 'modal-login') {
    return ReactDOM.createPortal(
      <ModalContainer id={id} desktop={false}>
        {children}
      </ModalContainer>,
      modal
    );
  }
  if (id === 'modal-invalid') {
    return ReactDOM.createPortal(
      <ModalContainer id={id} desktop={true}>
        {children}
      </ModalContainer>,
      modal
    );
  }
  return ReactDOM.createPortal(
    <ModalContainer id={id} desktop={true}>
      {children}
    </ModalContainer>,
    modal
  );
};

export { Modal };
