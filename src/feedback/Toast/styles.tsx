import styled from 'styled-components';
import {
  ToastContainer as ToastContainerOriginal,
  toast,
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastContainer = styled(ToastContainerOriginal).attrs(() => ({
  role: 'alert',
}))`
  .Toastify__close-button {
    align-self: center;
  }
`;
