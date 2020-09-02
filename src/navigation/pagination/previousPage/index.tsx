import React, { FC } from 'react';

import Paragraph from 'typography/Paragraph';

import { WrapperButton } from '../styles';
import { PreviousPageIcon } from './styles';

import { PreviousPageProps } from './types';

export const PreviousPageComponent: FC<PreviousPageProps> = ({
  currentPage,
  changePage,
}) => {
  const previousPage = currentPage - 1;
  const isClickable = currentPage > 1;

  return (
    <WrapperButton
      onClick={() => isClickable && changePage(previousPage)}
      isClickable={isClickable}
    >
      <PreviousPageIcon />
      <Paragraph type="p4">Anterior</Paragraph>
    </WrapperButton>
  );
};

export default PreviousPageComponent;
