import { ModalStyle } from './types';
import { CSSProperties } from 'react';
import styled from 'styled-components';

import ReactModal, { Styles } from 'react-modal';

import { colors } from 'styles';

let x: CSSProperties = {};

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

export const getModalStyle: ModalStyle = size => ({
  content: {
    backgroundColor: '#fff',
    opacity: 1,
    outline: 'none',
    borderRadius: '11px',
    boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
    display: 'flex',
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-grow: 1;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Modal = styled(ReactModal)`
  height: 300px;
  width: 450px;
`;

export const Line = styled.div`
  height: 8px;
  width: 100%;
  background-color: ${colors.primary.blue};
  border-radius: 11px 11px 0 0;
`;
