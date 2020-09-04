import styled from 'styled-components';
import { ToastContainer as ToastContainerOriginal } from 'react-toastify';

import { colors } from 'styles';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContainer = styled(ToastContainerOriginal).attrs(() => ({
  role: 'alert',
  autoClose: false,
}))`
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
  }

  .Toastify__toast-body {
    display: flex;
    align-items: center;
  }

  .Toastify__close-button {
    align-self: center;
    color: #bfc0c3;
  }
`;
