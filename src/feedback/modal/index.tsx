import React, { FC } from 'react';

import { Modal, Wrapper, modalStyle } from './styles';

import { ModalProps } from './types';

const ModalComponent: FC<ModalProps> = ({
  isOpen,
  onAfterOpen,
  onAfterClose,
  closeModal,
  contentLabel,
  children,
  size,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
      className="Modal"
      overlayClassName="Overlay"
      style={modalStyle(size)}
    >
      <Wrapper>{children}</Wrapper>
    </Modal>
  );
};

ModalComponent.defaultProps = {
  contentLabel: '',
  size: 'medium',
  onAfterOpen: () => {},
  onAfterClose: () => {},
};

export default ModalComponent;
