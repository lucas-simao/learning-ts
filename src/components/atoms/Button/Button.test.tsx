import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('renders button', () => {
  it('button label', () => {
    render(<Button label='Salvar' typeProp='positive'/>);
    const button = screen.getByText('Salvar')
    expect(button).toBeInTheDocument();
  })

  it('called function', () => {
    const onSubmit = jest.fn();
    render(<Button onClick={onSubmit} label='Salvar' typeProp='positive'/>);
    fireEvent.click(screen.getByText('Salvar'));
    expect(onSubmit).toBeCalled()
  })
});
