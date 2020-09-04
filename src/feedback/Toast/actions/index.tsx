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

const error = (title: string, description: string) => {
  toast.error(<Info title={title} description={description} type="error" />);
};

const warning = (title: string, description: string) => {
  toast.warning(
    <Info title={title} description={description} type="warning" />
  );
};

const success = (title: string, description: string) => {
  toast.success(
    <Info title={title} description={description} type="success" />
  );
};

export default { error, success, warning };
