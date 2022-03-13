import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component formRegister', () => {
  render(<App />);
  const formElement = screen.getByText('Formulário de cadastro');
  expect(formElement).toBeInTheDocument();
});
