import React, { FC } from 'react';

import PreviousPage from './PreviousPage';
import Pages from './Pages';
import NextPage from './NextPage';

import { Wrapper } from './styles';

import { PaginationProps } from './types';

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChangePage,
}) => {
  const changePage = (page: number) => {
    onChangePage(page);
  };

  return (
    <Wrapper role="pagination">
      <PreviousPage currentPage={currentPage} changePage={changePage} />
      <Pages
        changePage={changePage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <NextPage
        currentPage={currentPage}
        changePage={changePage}
        totalPages={totalPages}
      />
    </Wrapper>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
};

export default Pagination;
