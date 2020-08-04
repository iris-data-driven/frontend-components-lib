import React, { FC } from 'react';

import Paragraph from 'typography/paragraph';

import { Wrapper, PreviousPageIcon } from './styles';

import { PreviousPageProps } from './types';

export const PreviousPageComponent: FC<PreviousPageProps> = ({
  currentPage,
  changePage,
}) => {
  const PreviousIcon = require('../media/changePageIcon.svg');

  const previousPage = currentPage - 1;
  const isClickable = currentPage > 1;

  return (
    <Wrapper
      onClick={() => isClickable && changePage(previousPage)}
      isClickable={isClickable}
    >
      <PreviousPageIcon src={PreviousIcon} alt="Página anterior" />
      <Paragraph type="p4">Anterior</Paragraph>
    </Wrapper>
  );
};

export default PreviousPageComponent;
