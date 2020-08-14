export type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  onAfterClose?: () => void;
  onAfterOpen?: () => void;
  contentLabel?: string;
  size: 'medium' | 'large';
};
