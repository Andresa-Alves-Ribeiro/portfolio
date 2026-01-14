import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToElement } from '../utils/helpers';

/**
 * Componente de página 404 - Página não encontrada
 * @returns {JSX.Element} Página de erro 404
 */
const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      scrollToElement(sectionId);
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-dark text-white px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-primary animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('notFound.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            {t('notFound.description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-variant transition-colors duration-300 no-underline"
            aria-label={t('notFound.goHome')}
          >
            {t('notFound.goHome')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
            aria-label={t('notFound.back')}
          >
            {t('notFound.back')}
          </button>
        </div>

        <div className="mt-12 text-gray-400 text-sm">
          <p>{t('notFound.orExplore')}</p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <button
              onClick={(e) => handleSectionClick(e, 'about')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label={t('notFound.about')}
            >
              {t('notFound.about')}
            </button>
            <button
              onClick={(e) => handleSectionClick(e, 'skills')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label={t('notFound.skills')}
            >
              {t('notFound.skills')}
            </button>
            <button
              onClick={(e) => handleSectionClick(e, 'projects')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label={t('notFound.projects')}
            >
              {t('notFound.projects')}
            </button>
            <button
              onClick={(e) => handleSectionClick(e, 'contact')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label={t('notFound.contact')}
            >
              {t('notFound.contact')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

