import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import TestingLinkApp from './utils/TestingLinkApp';

describe('Link', () => {
  it('Should match the snapshot', () => {
    const text = 'Link text';

    render(
      <Router>
        <TestingLinkApp text={text} />
      </Router>
    );

    const component = screen.getByRole('link');

    expect(component).toMatchSnapshot();
  });

  it('Should render foo text correctly', async () => {
    const text = 'Link text';

    const { container, getByText } = render(
      <Router>
        <TestingLinkApp text={text} />
      </Router>
    );

    expect(container.innerHTML).toMatch('You are home');

    expect(getByText(text)).toBeInTheDocument();

    fireEvent.click(getByText(text));

    await waitFor(() => {
      expect(container.innerHTML).toMatch('You are on the about page');
    });
  });
});
