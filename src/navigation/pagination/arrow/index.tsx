import React, { FC } from 'react';

import { ArrowProps } from './types';

const Arrow: FC<ArrowProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    enableBackground="new 0 0 20.5 20.5"
    version="1.1"
    viewBox="0 0 20.5 20.5"
  >
    <path d="M9.4 10.3L13 6.7c.2-.2.2-.4.2-.6 0-.2-.1-.4-.2-.6-.3-.3-.9-.3-1.2 0L7.6 9.7c-.3.3-.3.9 0 1.2l4.2 4.2c.2.2.4.2.6.2.2 0 .4-.1.6-.3.3-.3.3-.8 0-1.2l-3.6-3.5z"></path>
  </svg>
);

Arrow.defaultProps = {
  className: '',
};

export default Arrow;
