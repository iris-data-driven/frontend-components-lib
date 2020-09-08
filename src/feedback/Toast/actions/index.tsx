import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

import Info from './Info';

const config: ToastOptions = {
  position: 'top-right',
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default (
  title: string,
  description: string,
  type: 'success' | 'error' | 'warning'
) =>
  toast[type](
    <Info title={title} description={description} type={type} />,
    config
  );
