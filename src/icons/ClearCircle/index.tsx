import React, { FC } from 'react';

import { colors } from 'styles';

import { IconsProps } from '../types';

const CheckCircle: FC<IconsProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={colors.primary.red}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 23.5A11.5 11.5 0 1123.5 12 11.51 11.51 0 0112 23.5zm0-20.65A9.15 9.15 0 1021.15 12 9.17 9.17 0 0012 2.85z"></path>
    <path d="M13.36 12l2.05-2.06a1 1 0 00-1.35-1.35L12 10.64 9.94 8.59a1 1 0 00-1.35 1.35L10.65 12l-2.06 2.06a.94.94 0 000 1.35.92.92 0 00.67.28.94.94 0 00.68-.28L12 13.35l2.06 2.06a1 1 0 001.35 0 .94.94 0 000-1.35z"></path>
  </svg>
);

export default CheckCircle;
