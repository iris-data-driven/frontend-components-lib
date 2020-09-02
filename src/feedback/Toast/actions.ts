import { toast, ToastOptions } from 'react-toastify';

const config: ToastOptions = {
  position: 'top-right',
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const error = (title: string) => {
  // TODO: CRIAR COMPONENTES DE ESTILO wrapper, titulo e subtitulo
  toast.error(title, config);
};

const warning = (title: string) => {
  toast.warning(title, config);
};

const success = (title: string) => {
  toast.success(title, config);
};

export default { error, success, warning };
