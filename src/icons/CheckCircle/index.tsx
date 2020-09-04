import React, { FC } from 'react';

import { colors } from 'styles';

import { IconsProps } from '../types';

const CheckCircle: FC<IconsProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={colors.semantic.blue.secondary}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17 7.61l-.08-.05h-.17l-.07.05-6.8 6.65-2.48-2.4a.2.2 0 00-.16-.07.19.19 0 00-.15.07l-1 1a.12.12 0 00-.05.07A.11.11 0 006 13a.15.15 0 000 .09.15.15 0 00.05.07l3.12 3a1 1 0 00.65.31 1 1 0 00.65-.3L18 8.9a.28.28 0 000-.15.23.23 0 000-.16z"></path>
    <path d="M22.63 7.6A11.48 11.48 0 0012 .5a11.5 11.5 0 00-2.24 22.78 11.52 11.52 0 0011.8-4.89A11.52 11.52 0 0022.63 7.6zm-2 9a9.82 9.82 0 01-16.82.82 9.84 9.84 0 014.43-14.5 9.57 9.57 0 013.69-.74H12a9.82 9.82 0 018.65 14.45z"></path>
  </svg>
);

export default CheckCircle;
