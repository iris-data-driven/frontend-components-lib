import React from 'react';

import { ToastContainer, Wrapper } from './styles';

const Container = () => (
  <Wrapper>
    <ToastContainer
      role="alert"
      position="bottom-right"
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Wrapper>
);

export default Container;
