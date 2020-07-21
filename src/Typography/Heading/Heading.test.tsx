import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import Heading from './';

import { texts } from '../../styles';

describe('Heading', () => {
  it('Should render the heading text correctly', () => {
    const text = 'This is a heading type 1';

    render(<Heading type="h1">{text}</Heading>);

    const component = screen.getByTestId('heading');
    expect(component).toHaveTextContent(text);
    expect(component).toMatchSnapshot();
    expect(component).toHaveStyleRule('color', '#333');
    expect(component).toHaveStyleRule('font-family', "'Raleway Bold'");
  });
});
