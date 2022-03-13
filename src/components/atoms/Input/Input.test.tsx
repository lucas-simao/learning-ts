import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './index';

describe('renders input', () => {
  let value = 'lucas'
  const setValue = (inputValue: string) => {
    value = inputValue
  }

  render(
    <Input 
      id="input-normal" 
      type="text" 
      label="Nome" 
      value={value}
      onChange={setValue}
    />,
  );

  it('input', () => {
    const input = screen.getByText('Nome');
    expect(input).toBeInTheDocument();
  });
});
