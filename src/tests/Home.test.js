import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../help/renderWithRouter';
import Home from '../page/Home';

describe('1 - verifica a página inicial:', () => {
  test('Rota para esta página', () => {
    const { history } = renderWithRouter(<Home />, '/');
    expect(history.location.pathname).toBe('/');
  });
  
  test('Verifica se existe um botão', () => {
    renderWithRouter(<Home />, '/');

    const button = screen.getByText(/curtir/i);
    expect(button).toBeInTheDocument();
  });
});
