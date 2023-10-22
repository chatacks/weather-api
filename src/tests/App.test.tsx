import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import * as getWeather from '../services/getWeatherApi';

import App from '../App';
import city from '../mocks/city';

afterEach(() => vi.clearAllMocks());

const rio = 'Rio de Janeiro';

describe('Verifica componente <App />', () => {
  it('Verifica se o componente renderiza um input', () => {
    render(<App />);

    const input = screen.getByTestId(/input-search/i);

    expect(input).toBeInTheDocument();
  });

  it('Verifica se o input recebe um texto com nome de uma cidade/país', async () => {
    render(<App />);

    const user = userEvent.setup();
    const input = screen.getByTestId(/input-search/i);

    await user.type(input, rio);

    expect(input).toHaveValue(rio);
  });

  it('Verifica se o componente renderiza um botão', () => {
    render(<App />);

    const button = screen.getByTestId(/button-search/i);

    expect(button).toBeInTheDocument();
  });

  it('Verifica se o botão no componente app é clicável', async () => {
    render(<App />);

    const user = userEvent.setup();
    const button = screen.getByTestId(/button-search/i);

    await user.click(button);
  });

  it('Verifica se ao procurar uma cidade a API retorna os dados corretos', async () => {
    render(<App />);

    const mockFetch = vi.spyOn(getWeather, 'default').mockResolvedValue(city);

    const user = userEvent.setup();
    const input = screen.getByTestId(/input-search/i);
    const button = screen.getByTestId(/button-search/i);

    await user.type(input, rio);
    await user.click(button);

    expect(mockFetch).toBeCalled();
  });
});
