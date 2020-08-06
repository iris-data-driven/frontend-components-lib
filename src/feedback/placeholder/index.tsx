import React, { FC } from 'react';

import { Wrapper } from './styles';

import { PlaceholderProps } from './types';

const Placeholder: FC<PlaceholderProps> = props => (
  <Wrapper {...props} role="placeholder-loader" aria-busy="true" />
);

Placeholder.defaultProps = {
  className: '',
  type: 'text',
};

export default Placeholder;
