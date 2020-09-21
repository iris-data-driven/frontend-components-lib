import React, { FC } from 'react';

import { colors } from 'styles';

import { IconsProps } from '../types';

const Close: FC<IconsProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill={colors.primary.red}
    ></path>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2"
      d="M8.421 8.774l7.004 7.005M15.426 8.773L8.42 15.778"
    ></path>
  </svg>
);

export default Close;
