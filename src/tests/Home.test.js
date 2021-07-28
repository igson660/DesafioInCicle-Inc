import React from 'react';
// import { fireEvent, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../help/renderWithRouter';
import Home from '../page/Home';

describe(`1 - verifica a página inicial:`, () => {
  test('Rota para esta página', () => {
    const { history } = renderWithRouter(<Home />, '/');
    expect(history.location.pathname).toBe('/');
  });
});
