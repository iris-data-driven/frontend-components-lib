import styled from 'styled-components';

import ReactModal from 'react-modal';

import { colors } from 'styles';

const backgroundWithOpacity = colors.neutral.black + '1a';

const sizes = {
  medium: {
    width: '590px',
    height: '335px',
  },
  large: {
    width: '655px',
    height: '370px',
  },
};

const sizes = {
  medium: {
    width: '590px',
    height: '335px',
  },
  large: {
    width: '655px',
    height: '370px',
  },
};

export const modalStyle = size => ({
  content: {
    backgroundColor: '#fff',
    opacity: 1,
    ...sizes[size],
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: backgroundWithOpacity,
  },
});

export const Wrapper = styled.div``;

export const Modal = styled(ReactModal)`
  height: 300px;
  width: 450px;
`;
