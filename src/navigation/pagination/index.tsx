import React, { FC, useState } from 'react';

import PreviousPage from './previousPage';
import Pages from './pages';
import NextPage from './nextPage';

import { Wrapper } from './styles';

import { PaginationProps } from './types';

const Pagination: FC<PaginationProps> = ({ totalPages, onChangePage }) => {
  const [currentPage, setcurrentPage] = useState(1);

  const changePage = (page: number) => {
    setcurrentPage(page);
    onChangePage(page);
  };

  return (
    <>
      {`Current page: ${currentPage}  `}
      <br />
      <Wrapper>
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
    </>
  );
};
export default Pagination;
