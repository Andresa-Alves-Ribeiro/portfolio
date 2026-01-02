import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToElement } from '../utils/helpers';

/**
 * Componente de página 404 - Página não encontrada
 * @returns {JSX.Element} Página de erro 404
 */
const NotFound = () => {
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
            Página não encontrada
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-variant transition-colors duration-300 no-underline"
            aria-label="Ir para página inicial"
          >
            Ir para início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
            aria-label="Voltar para página anterior"
          >
            Voltar
          </button>
        </div>

        <div className="mt-12 text-gray-400 text-sm">
          <p>Ou explore:</p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <button
              onClick={(e) => handleSectionClick(e, 'about')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label="Ir para seção Sobre"
            >
              Sobre
            </button>
            <button
              onClick={(e) => handleSectionClick(e, 'skills')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label="Ir para seção Skills"
            >
              Skills
            </button>
            <button
              onClick={(e) => handleSectionClick(e, 'projects')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label="Ir para seção Projetos"
            >
              Projetos
            </button>
            <button
              onClick={(e) => handleSectionClick(e, 'contact')}
              className="text-primary hover:text-primary-variant transition-colors bg-transparent border-none cursor-pointer underline"
              aria-label="Ir para seção Contato"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

