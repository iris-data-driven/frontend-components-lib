import React from 'react';
import { render, screen } from '@testing-library/react';

import Heading from './';

describe('Heading', () => {
  it('Should render the heading text correctly', () => {
    const text = 'This is a heading type 1';

    render(<Heading type="h1">{text}</Heading>);

    const component = screen.getByTestId('heading');
    expect(component).toHaveTextContent(text);
  });
});
