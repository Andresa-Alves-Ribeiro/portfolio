import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-dark text-white px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <h1 className="text-6xl mb-4">⚠️</h1>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Ops! Algo deu errado
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Desculpe, ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left bg-gray-900 p-4 rounded-lg overflow-auto max-h-64">
                <summary className="cursor-pointer text-primary font-semibold mb-2">
                  Detalhes do erro (apenas em desenvolvimento)
                </summary>
                <pre className="text-sm text-red-400 mt-2">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-variant transition-colors duration-300"
              >
                Voltar para o início
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
              >
                Recarregar página
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

