import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';

import App from '../App';

describe('Verifica componente <App />', () => {
  it('Verifica se o componente renderiza um input', () => {
    render(<App />);

    const input = screen.getByTestId(/input-search/i);

    expect(input).toBeInTheDocument();
  });

  it('Verifica se o componente renderiza um botão', () => {
    render(<App />);

    const button = screen.getByTestId(/button-search/i);

    expect(button).toBeInTheDocument();
  });

  it('Verifica se o input recebe um texto com nome de uma cidade/país', async () => {
    render(<App />);

    const user = userEvent.setup();
    const input = screen.getByTestId(/input-search/i);

    await user.type(input, 'Rio de Janeiro');

    expect(input).toHaveValue('Rio de Janeiro');
  });

  it('');
});
