import React, { FC, useEffect } from 'react';

import Paragraph from 'typography/paragraph';

import { Wrapper } from './styles';

import { NextPageProps } from './types';

const NextPage: FC<NextPageProps> = ({
  currentPage,
  changePage,
  totalPages,
}) => {
  const nextPage = currentPage + 1;
  const isClickable = nextPage < totalPages;

  return (
    <Wrapper
      onClick={() => isClickable && changePage(nextPage)}
      isClickable={isClickable}
    >
      {
        // TODO: botar icon de próxima
      }
      <Paragraph type="p2">Próxima</Paragraph>
    </Wrapper>
  );
};

export default NextPage;
