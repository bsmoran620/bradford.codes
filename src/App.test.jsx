import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Brad Moran' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /My Travel/ })).toHaveAttribute('href', '/projects/my-travel');
  expect(screen.getByRole('link', { name: /Resume.*View resume/ })).toHaveAttribute('href', '/resume');
});
