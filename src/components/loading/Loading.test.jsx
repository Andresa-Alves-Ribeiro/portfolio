import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
  test('renders loading spinner', () => {
    render(<Loading />);
    const spinner = screen.getByLabelText('Carregando');
    expect(spinner).toBeInTheDocument();
  });

  test('displays custom text', () => {
    render(<Loading text="Aguarde..." />);
    expect(screen.getByText('Aguarde...')).toBeInTheDocument();
  });

  test('renders without text when text prop is not provided', () => {
    render(<Loading text="" />);
    expect(screen.queryByText('Carregando...')).not.toBeInTheDocument();
  });

  test('applies fullScreen class when fullScreen is true', () => {
    const { container } = render(<Loading fullScreen />);
    const loadingContainer = container.firstChild;
    expect(loadingContainer).toHaveClass('min-h-screen');
  });

  test('applies correct size classes', () => {
    const { container, rerender } = render(<Loading size="sm" />);
    let spinner = container.querySelector('svg');
    expect(spinner).toHaveClass('h-4', 'w-4');

    rerender(<Loading size="md" />);
    spinner = container.querySelector('svg');
    expect(spinner).toHaveClass('h-8', 'w-8');

    rerender(<Loading size="lg" />);
    spinner = container.querySelector('svg');
    expect(spinner).toHaveClass('h-12', 'w-12');
  });
});

