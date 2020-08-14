import React, { useState } from 'react';

import { StoryWrapper } from 'styles/helpers';

import ModalComponent from './';

export default {
  title: 'Feedback|Modal',
};
export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <StoryWrapper>
      <button onClick={openModal}>Open Modal</button>

      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </ModalComponent>
    </StoryWrapper>
  );
};
