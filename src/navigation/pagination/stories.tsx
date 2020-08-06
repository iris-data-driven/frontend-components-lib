import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { StoryWrapper } from 'styles/helpers';

import PaginationComponent from './';

storiesOf('Navigation|Pagination', module)
  .add('20 pages', () => {
    const [currentPage, setcurrentPage] = useState(1);

    const onChangePage = page => {
      setcurrentPage(page);
    };

    return (
      <StoryWrapper>
        <PaginationComponent
          currentPage={currentPage}
          onChangePage={onChangePage}
          totalPages={20}
        />
      </StoryWrapper>
    );
  })
  .add('5 pages', () => {
    const [currentPage, setcurrentPage] = useState(1);

    const onChangePage = page => {
      setcurrentPage(page);
    };

    return (
      <StoryWrapper>
        <PaginationComponent
          currentPage={currentPage}
          onChangePage={onChangePage}
          totalPages={5}
        />
      </StoryWrapper>
    );
  })
  .add('1 page', () => {
    const [currentPage, setcurrentPage] = useState(1);

    const onChangePage = page => {
      setcurrentPage(page);
    };

    return (
      <StoryWrapper>
        <PaginationComponent
          currentPage={currentPage}
          onChangePage={onChangePage}
          totalPages={1}
        />
      </StoryWrapper>
    );
  });
