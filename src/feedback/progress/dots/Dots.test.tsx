import React from 'react';
import { render, screen } from '@testing-library/react';

import Dots from './';

describe('Dots', () => {
  it('Should render foo text correctly', () => {
    render(<Dots />);
    const component = screen.getByRole('dots-loader');
    expect(component).toBeInTheDocument();
  });
});
