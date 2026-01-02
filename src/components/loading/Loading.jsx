import React from 'react';

/**
 * Componente de Loading genérico e reutilizável
 * @param {Object} props
 * @param {string} props.size - Tamanho do spinner ('sm', 'md', 'lg')
 * @param {string} props.text - Texto a ser exibido abaixo do spinner
 * @param {boolean} props.fullScreen - Se true, ocupa a tela inteira
 */
const Loading = ({ size = 'md', text = 'Carregando...', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const containerClasses = fullScreen
    ? 'min-h-screen flex items-center justify-center bg-bg-dark'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        <svg
          className={`animate-spin ${sizeClasses[size]} text-primary`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="Carregando"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        {text && (
          <p className="text-white text-sm md:text-base animate-pulse">{text}</p>
        )}
      </div>
    </div>
  );
};

export default Loading;

