import React, { FC } from 'react';

import { colors } from 'styles';

import { IconsProps } from '../types';

const CheckCircle: FC<IconsProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={colors.semantic.orange.secondary}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2.58l9.64 19.21H2.36L12 2.58zM12 .5a1.71 1.71 0 00-.82.31 1.76 1.76 0 00-.55.69L.82 21.07C.06 22.41.7 23.5 2.24 23.5h19.52c1.54 0 2.18-1.09 1.42-2.43L13.37 1.5a1.76 1.76 0 00-.55-.69A1.71 1.71 0 0012 .5zm1.44 18.69a1.43 1.43 0 01-.89 1.33 1.56 1.56 0 01-.83.08 1.54 1.54 0 01-.74-.4 1.45 1.45 0 01-.39-.73A1.44 1.44 0 0111.2 18a1.44 1.44 0 012.24 1.2zM12 16.31a1.45 1.45 0 01-1-.42 1.43 1.43 0 01-.42-1v-4.3a1.44 1.44 0 112.88 0v4.3a1.43 1.43 0 01-.42 1 1.45 1.45 0 01-1.04.42z"></path>
  </svg>
);

export default CheckCircle;
