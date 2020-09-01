import React, { FC } from 'react';

import CloseButton from './closeButton';

import { Modal, Wrapper, getModalStyle, Line, Content } from './styles';

import { ModalProps } from './types';

const ModalComponent: FC<ModalProps> = ({
  onAfterOpen,
  onAfterClose,
  onCloseModal,
  isOpen,
  contentLabel,
  children,
  size,
  notClosable,
}) => (
  <Modal
    isOpen={isOpen}
    onAfterOpen={onAfterOpen}
    onAfterClose={onAfterClose}
    onRequestClose={onCloseModal}
    contentLabel={contentLabel}
    className="Modal"
    overlayClassName="Overlay"
    style={getModalStyle(size)}
    shouldCloseOnOverlayClick={!notClosable}
    shouldCloseOnEsc={!notClosable}
    ariaHideApp={false}
  >
    <Wrapper data-testid="modal">
      <Line />
      {!notClosable && <CloseButton onClick={onCloseModal} />}
      <Content>{children}</Content>
    </Wrapper>
  </Modal>
);

ModalComponent.defaultProps = {
  contentLabel: '',
  size: 'medium',
  onAfterOpen: () => {},
  onAfterClose: () => {},
  notClosable: false,
};

export default ModalComponent;
