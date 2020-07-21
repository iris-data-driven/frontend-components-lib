import React from 'react';
import { render, screen } from '@testing-library/react';

import Paragraph from './';

describe('Paragraph', () => {});

describe('Paragraph', () => {
  it('Should render the text correctly', () => {
    const text = 'This is a paragraph type 1';

    render(<Paragraph type="p1">{text}</Paragraph>);

    const component = screen.getByTestId('paragraph');
    expect(component).toHaveTextContent(text);
  });
});
