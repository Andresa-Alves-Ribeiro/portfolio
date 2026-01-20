import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


const Loading = ({ size = 'md', text = null, fullScreen = false }) => {
  const { t } = useTranslation();
  const displayText = text ?? t('common.loading');
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const containerClasses = fullScreen
    ? 'min-h-screen flex items-center justify-center bg-bg-dark'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses} data-testid="loading-container">
      <div className="flex flex-col items-center gap-4">
        <svg
          className={`animate-spin ${sizeClasses[size]} text-primary`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-label={displayText}
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
        {displayText && (
          <p className="text-white text-sm md:text-base animate-pulse">{displayText}</p>
        )}
      </div>
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string,
  fullScreen: PropTypes.bool,
};

export default Loading;

