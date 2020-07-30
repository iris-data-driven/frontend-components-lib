import React, { FC } from 'react';

import Paragraph from 'typography/paragraph';

import { Wrapper } from './styles';

import { PreviousPageProps } from './types';

export const PreviousPage: FC<PreviousPageProps> = ({
  currentPage,
  changePage,
}) => {
  const previousPage = currentPage - 1;
  const isClickable = currentPage > 1;

  return (
    <Wrapper
      onClick={() => isClickable && changePage(previousPage)}
      isClickable={isClickable}
    >
      {
        // TODO: botar icon de anterior
      }
      <Paragraph type="p2">Anterior</Paragraph>
    </Wrapper>
  );
};

export default PreviousPage;
