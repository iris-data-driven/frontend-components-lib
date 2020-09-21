import styled from 'styled-components';
import { ToastContainer as ToastContainerOriginal } from 'react-toastify';

import { colors } from 'styles';
import 'react-toastify/dist/ReactToastify.css';

export const Wrapper = styled.div`
  .Toastify__toast-container {
    width: 383px;
  }
`;

export const ToastContainer = styled(ToastContainerOriginal)`
  .Toastify__toast {
    background-color: #fff;
    border-radius: 3px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 100%;
      border-radius: 3px;
    }

    &.Toastify__toast--error {
      &::before {
        background-color: ${colors.primary.red};
      }
    }

    &.Toastify__toast--warning {
      &::before {
        background-color: ${colors.semantic.orange.secondary};
      }
    }

    &.Toastify__toast--success {
      &::before {
        background-color: ${colors.semantic.blue.secondary};
      }
    }

    .Toastify__toast-body {
      display: flex;
      align-items: center;
    }

    .Toastify__close-button {
      align-self: center;
      color: #bfc0c3;
      margin-left: 10px;
    }
  }
`;
