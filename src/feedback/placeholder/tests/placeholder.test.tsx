import React from 'react';
import { render, screen } from '@testing-library/react';

import Placeholder from '../';

describe('Placeholder', () => {
  it('Should render correctly without an implicit type', () => {
    render(<Placeholder />);
    const component = screen.getByRole('placeholder-loader');
    expect(component).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  it('Should render correctly with heading type', () => {
    render(<Placeholder type="heading" />);
    const component = screen.getByRole('placeholder-loader');
    expect(component).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  it('Should render correctly with circle type', () => {
    render(<Placeholder type="circle" />);
    const component = screen.getByRole('placeholder-loader');
    expect(component).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  it('Should render correctly with custom type', () => {
    render(<Placeholder type="custom" />);
    const component = screen.getByRole('placeholder-loader');
    expect(component).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
