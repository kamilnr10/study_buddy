import styled from 'styled-components';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 240px;
  min-height: 340px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  opacity: 1;
`;

export const ModalBackground = styled.div`
  ::before {
    content: '';
    opacity: 0.5;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
