import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Pagination from '../';

import { PaginationProps } from '../types';

describe('Pagination', () => {
  let props: PaginationProps;

  beforeEach(() => {
    props = {
      currentPage: 1,
      totalPages: 20,
      onChangePage: page => (props.currentPage = page),
    };
  });

  it('Should match the snapshot', () => {
    render(<Pagination {...props} />);

    const component = screen.getByRole('pagination');

    expect(component).toMatchSnapshot();
  });

  it('Should render nextPage and previousPage buttons', () => {
    render(<Pagination {...props} />);

    expect(screen.getByRole('next-page-button')).toBeInTheDocument();
  });

  it('Should return new page number when change page', () => {
    render(<Pagination {...props} />);

    fireEvent.click(screen.getByText('2'));

    expect(props.currentPage).toEqual(2);
  });

  it('Should render the initial stage when the page is less than 5', () => {
    render(<Pagination {...props} />);
    const components = screen.getAllByRole('paragraph');

    expect(components[0].innerHTML).toEqual('Anterior');
    expect(components[1].innerHTML).toEqual('1');
    expect(components[2].innerHTML).toEqual('2');
    expect(components[3].innerHTML).toEqual('3');
    expect(components[4].innerHTML).toEqual('4');
    expect(components[5].innerHTML).toEqual('5');
    expect(components[6].innerHTML).toEqual('...');
    expect(components[7].innerHTML).toEqual('20');
    expect(components[8].innerHTML).toEqual('Próxima');
  });

  it('Should render the medium stage when the page is more than 5', async () => {
    let newProps = props;

    newProps.currentPage = 6;

    render(<Pagination {...newProps} />);

    const components = screen.getAllByRole('paragraph');

    expect(components[0].innerHTML).toEqual('Anterior');
    expect(components[1].innerHTML).toEqual('1');
    expect(components[2].innerHTML).toEqual('...');
    expect(components[3].innerHTML).toEqual('4');
    expect(components[4].innerHTML).toEqual('5');
    expect(components[5].innerHTML).toEqual('6');
    expect(components[6].innerHTML).toEqual('...');
    expect(components[7].innerHTML).toEqual('20');
    expect(components[8].innerHTML).toEqual('Próxima');
  });

  it('Should render the final stage when the page is 5 less than the final page', async () => {
    let newProps = props;

    newProps.currentPage = 16;

    render(<Pagination {...newProps} />);

    const components = screen.getAllByRole('paragraph');

    expect(components[0].innerHTML).toEqual('Anterior');
    expect(components[1].innerHTML).toEqual('1');
    expect(components[2].innerHTML).toEqual('...');
    expect(components[3].innerHTML).toEqual('16');
    expect(components[4].innerHTML).toEqual('17');
    expect(components[5].innerHTML).toEqual('18');
    expect(components[6].innerHTML).toEqual('19');
    expect(components[7].innerHTML).toEqual('20');
    expect(components[8].innerHTML).toEqual('Próxima');
  });
});
