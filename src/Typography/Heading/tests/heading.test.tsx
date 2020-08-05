import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import Heading from './';

describe('Heading', () => {
  it('Should render the h1 with the correct text and style', () => {
    const text = 'This is a heading type 1';

    render(<Heading type="h1">{text}</Heading>);

    const component = screen.getByRole('heading', { name: text });
    expect(component).toMatchSnapshot();
    expect(component).toHaveTextContent(text);
  });

  it('Should render the h2 with the correct text and style', () => {
    const text = 'This is a heading type 2';

    render(<Heading type="h2">{text}</Heading>);

    const component = screen.getByRole('heading', { name: text });
    expect(component).toMatchSnapshot();

    expect(component).toHaveTextContent(text);
  });

  it('Should render the h3 with the correct text and style', () => {
    const text = 'This is a heading type 3';

    render(<Heading type="h3">{text}</Heading>);

    const component = screen.getByRole('heading', { name: text });
    expect(component).toMatchSnapshot();
    expect(component).toHaveTextContent(text);
  });
});
