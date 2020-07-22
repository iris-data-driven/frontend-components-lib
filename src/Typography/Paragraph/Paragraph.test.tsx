import React from 'react';
import { render, screen } from '@testing-library/react';

import Paragraph from './';

describe('Paragraph', () => {
  it('Should render the paragraph with the correct text and style', () => {
    const text = 'This is a paragraph type 1';

    render(<Paragraph type="p1">{text}</Paragraph>);

    const component = screen.getByRole('paragraph');
    expect(component).toMatchSnapshot();
    expect(component).toHaveTextContent(text);
  });

  it('Should render the paragraph with the correct text and style', () => {
    const text = 'This is a paragraph type 2';

    render(<Paragraph type="p2">{text}</Paragraph>);

    const component = screen.getByRole('paragraph');
    expect(component).toMatchSnapshot();
    expect(component).toHaveTextContent(text);
  });

  it('Should render the paragraph with the correct text and style', () => {
    const text = 'This is a paragraph type 3';

    render(<Paragraph type="p3">{text}</Paragraph>);

    const component = screen.getByRole('paragraph');
    expect(component).toMatchSnapshot();
    expect(component).toHaveTextContent(text);
  });

  it('Should render the paragraph with the correct text and style', () => {
    const text = 'This is a paragraph type 4';

    render(<Paragraph type="p4">{text}</Paragraph>);

    const component = screen.getByRole('paragraph');
    expect(component).toMatchSnapshot();
    expect(component).toHaveTextContent(text);
  });
});
