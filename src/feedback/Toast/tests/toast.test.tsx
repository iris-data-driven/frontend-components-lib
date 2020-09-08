import React from 'react';
import { render, screen } from '@testing-library/react';

import { Container, toast } from '../';

describe('Toast', () => {
  it('Should render error toast correctly', async () => {
    render(<Container />);

    toast('Erro!', 'Algo deu errado', 'error');

    const component = await screen.findByRole('alert');

    expect(component).toBeInTheDocument();
  });

  it('Should render warning toast correctly', async () => {
    render(<Container />);

    toast('Aviso!', 'Algo talvez tenha dado errado', 'warning');

    const component = await screen.findByRole('alert');

    expect(component).toBeInTheDocument();
  });

  it('Should render success toast correctly', async () => {
    render(<Container />);

    toast('Sucesso!', 'Algo não deu errado', 'success');

    const component = await screen.findByRole('alert');

    expect(component).toBeInTheDocument();
  });
});
