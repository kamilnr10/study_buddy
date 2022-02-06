import React, { useState } from 'react';
import Modal from './Modal';

const useModal = (initialState) => {
  const [isOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(false);
  const handleOpenModal = () => setModalOpen(true);

  return {
    Modal,
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
