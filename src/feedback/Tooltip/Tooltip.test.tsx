import React from 'react';
import { render, screen } from '@testing-library/react';

import Tooltip from './';

import { TooltipProps } from './types';

describe('Tooltip', () => {
  let props: TooltipProps;
  beforeEach(() => {
    props = {
      id: 'test-tooltip',
      text: '123',
    };
  });

  it('Should render default tooltip correctly', () => {
    props.text = 'Informação adicional';

    render(<Tooltip {...props} />);
    const component = screen.getByText(props.text);

    expect(component).toHaveTextContent('Informação adicional');
    expect(component).toMatchSnapshot();
  });

  it('Should render small tooltip correctly', () => {
    props.type = 'small';

    render(<Tooltip {...props} />);
    const component = screen.getByText(props.text);

    expect(component).toHaveTextContent('123');
    expect(component).toMatchSnapshot();
  });
});
