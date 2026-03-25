import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the home page', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to my site/i)).toBeInTheDocument();
});
