import { Styles } from 'react-modal';

type Size = 'medium' | 'large';

export type ModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  onAfterClose?: () => void;
  onAfterOpen?: () => void;
  size?: Size;
  contentLabel?: string;
  notClosable?: boolean;
};

export type ModalStyle = (size: Size) => Styles;
