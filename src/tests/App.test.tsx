import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';

import App from '../App';

describe('Verifica componente <App />', () => {
  it('Verifica se o componente renderiza um input', () => {
    render(<App />);

    const user = userEvent.setup();
    const input = screen.getByTestId('input-search');
  });
});
