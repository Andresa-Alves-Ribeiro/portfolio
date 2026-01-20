import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};
ThrowError.propTypes = {
  shouldThrow: PropTypes.bool.isRequired,
};

describe('ErrorBoundary', () => {
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });

  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders error UI when error occurs', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText(/Ops! Algo deu errado/i)).toBeInTheDocument();
    expect(screen.getByText(/Voltar para o início/i)).toBeInTheDocument();
    expect(screen.getByText(/Recarregar página/i)).toBeInTheDocument();
  });
});

