import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper, ModalBackground } from './Modal.styles';

// const ModalWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   min-width: 240px;
//   min-height: 340px;
//   background-color: ${({ theme }) => theme.colors.white};
//   border-radius: 15px;
//   box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);
//   z-index: 9999;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
// `;

// const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleCloseModal, isOpen, children }) => {
  //   const modalNode = document.createElement('div');

  //   useEffect(() => {
  //     modalContainer.appendChild(modalNode);

  //     return () => {
  //       modalContainer.removeChild(modalNode);
  //     };
  //   }, [modalNode]);

  //   return ReactDOM.createPortal(
  //     <ModalWrapper>
  //       {children}
  //       <Button onClick={handleCloseModal}>Close modal</Button>
  //     </ModalWrapper>,
  //     modalNode
  //   );

  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
      <Button onClick={handleCloseModal}>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
