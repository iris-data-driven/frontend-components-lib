import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '../';

import { ModalProps } from '../types';

describe('Modal', () => {
  it('Medium modal should match snapshot', () => {
    render(<Modal isOpen={true} onCloseModal={() => {}} />);

    const component = screen.getByTestId('modal');

    expect(component).toMatchSnapshot();
  });

  it('Large modal should match snapshot', () => {
    render(<Modal size="large" isOpen={true} onCloseModal={() => {}} />);

    const component = screen.getByTestId('modal');

    expect(component).toMatchSnapshot();
  });

  it('Should render the modal component correctly', () => {
    render(<Modal isOpen={true} onCloseModal={() => {}} />);

    const component = screen.getByTestId('modal');

    expect(component).toBeInTheDocument();
  });

  it("Shouldn't render the modal component correctly", () => {
    render(<Modal isOpen={false} onCloseModal={() => {}} />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('Should call  close modal function on click in icon ', async () => {
    const closeModal = jest.fn();
    render(<Modal isOpen={true} onCloseModal={closeModal} />);

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(closeModal).toHaveBeenCalled();
  });
});
