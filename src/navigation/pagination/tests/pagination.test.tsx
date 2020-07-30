import React from 'react';
import { render, screen } from '@testing-library/react';

import Pagination from '../';

describe('Pagination', () => {
  it('Should match the snapshot', () => {
    render(<Pagination totalPages={20} onChangePage={() => {}} />);

    const component = screen.getByRole('pagination');

    expect(component).toMatchSnapshot();
  });

  it('Should render nextPage and previousPage buttons', () => {
    render(<Pagination totalPages={20} onChangePage={() => {}} />);

    expect(screen.getByRole('next-page-button')).toBeInTheDocument();
  });
});
