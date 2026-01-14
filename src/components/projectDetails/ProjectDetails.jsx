import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioLinks } from '../../constants/portfolioLinks';
import { useParams, useNavigate } from 'react-router-dom';
import Github from '../../assets/github.svg';
import Vercel from '../../assets/vercel.svg';
import Loading from '../loading';
import Header from '../header';

/**
 * Componente que exibe os detalhes de um projeto específico
 * @returns {JSX.Element} Página de detalhes do projeto
 */
const ProjectDetails = () => {
  const { t } = useTranslation();
  const { title } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchProjectDetails = async () => {
      setIsLoading(true);
      setNotFound(false);
      
      const decodedTitle = decodeURIComponent(title);
      const fetchedProject = portfolioLinks.find(
        (project) => project.title.toLowerCase() === decodedTitle.toLowerCase()
      );
      
      if (fetchedProject) {
        setProject(fetchedProject);
        setNotFound(false);
      } else {
        setProject(null);
        setNotFound(true);
      }
      
      setIsLoading(false);
    };

    fetchProjectDetails();
  }, [title]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / (globalThis.innerWidth || 1920)) * 100,
        y: (e.clientY / (globalThis.innerHeight || 1080)) * 100,
      });
    };

    if (globalThis.window !== undefined) {
      globalThis.window.addEventListener('mousemove', handleMouseMove);
      return () => globalThis.window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  if (isLoading) {
    return <Loading fullScreen text={t('common.loadingProject')} />;
  }

  if (notFound || !project) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f] text-white px-4 overflow-hidden">
        {/* Header */}
        <Header isInPresentation={false} showNavLinks={true} />
        {/* Grid tecnológico de fundo */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        {/* Efeito de luz que segue o mouse */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255, 20, 147, 0.2) 0%, rgba(255, 20, 147, 0.1) 50%, transparent 100%)',
          }}
        ></div>

        {/* Linhas de conexão animadas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`notfound-line-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl mb-4 neon-text">🔍</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              {t('projectDetails.projectNotFound')}
            </h2>
            <p className="text-lg text-white/70 mb-6">
              {t('projectDetails.projectNotFoundDescription')}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleGoBack}
              className="group relative px-6 py-3 border-2 border-pink-500 text-white font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">{t('common.back')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href="/"
              className="group relative px-6 py-3 border-2 border-white/30 text-white font-semibold tracking-wider uppercase transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:scale-105 overflow-hidden no-underline"
            >
              <span className="relative z-10">{t('common.goHome')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Partículas flutuantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => {
            const randomSize = Math.random() * 4 + 2;
            const randomLeft = Math.random() * 100;
            const randomTop = Math.random() * 100;
            const randomDuration = Math.random() * 3 + 2;
            const randomDelay = Math.random() * 2;
            return (
              <div
                key={`notfound-particle-${i}-${randomLeft}-${randomTop}`}
                className="absolute rounded-full bg-pink-500/20"
                style={{
                  width: `${randomSize}px`,
                  height: `${randomSize}px`,
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                  animation: `float ${randomDuration}s ease-in-out infinite`,
                  animationDelay: `${randomDelay}s`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f] overflow-hidden py-20 px-4">
      {/* Header */}
      <Header isInPresentation={false} showNavLinks={true} />
      {/* Grid tecnológico de fundo */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Efeito de luz que segue o mouse */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255, 20, 147, 0.2) 0%, rgba(255, 20, 147, 0.1) 50%, transparent 100%)',
        }}
      ></div>

      {/* Linhas de conexão animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`line-${i}`}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Card principal com glass effect */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="glass-effect rounded-3xl shadow-[0_8px_32px_rgba(255,20,147,0.2)] border border-pink-500/30 overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Seção da imagem */}
            <div className="relative w-full lg:w-[40%] min-h-[300px] lg:min-h-[500px] overflow-hidden">
              {/* Efeito de brilho na borda da imagem */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-rose-500/20 pointer-events-none"></div>
              
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]/50 backdrop-blur-sm">
                  <Loading size="sm" text="" />
                </div>
              )}
              {imageError ? (
                <div className="w-full h-full bg-[#0a0a0f]/50 backdrop-blur-sm flex items-center justify-center text-white/50 border-r border-pink-500/30">
                  <span className="text-sm">{t('projectDetails.imageNotAvailable')}</span>
                </div>
              ) : (
                <img 
                  src={project.image} 
                  alt={`${t('projectDetails.projectImageAlt')} ${project.title}`}
                  loading="lazy"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}
              
              {/* Overlay gradiente na imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Seção de informações */}
            <div className="w-full lg:w-[60%] p-6 md:p-8 lg:p-12 flex flex-col justify-between">
              {/* Botão voltar */}
              <button 
                onClick={handleGoBack}
                aria-label={t('common.back')}
                className="group relative mb-6 px-4 py-2 border-2 border-pink-500/50 text-white text-xs md:text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:border-pink-500 hover:bg-pink-500/20 hover:shadow-[0_0_20px_rgba(255,20,147,0.5)] hover:scale-105 overflow-hidden self-start"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {t('common.back')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className='flex flex-col justify-center h-full space-y-6'>
                {/* Título */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
                  <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                    {project.title}
                  </span>
                </h2>

                {/* Stacks */}
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-3 py-1.5 glass-effect border border-pink-500/30 text-pink-400 text-xs md:text-sm font-semibold rounded-full uppercase tracking-wider transition-all duration-300 hover:border-pink-500 hover:text-pink-300 hover:shadow-[0_0_15px_rgba(255,20,147,0.3)]"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                {/* Descrição */}
                <p className="text-base md:text-lg leading-relaxed text-white/80">
                  {project.descriptionKey ? t(project.descriptionKey) : project.description}
                </p>

                {/* Links */}
                <div className="flex gap-6 items-center pt-4">
                  <a 
                    href={project.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`${t('projectDetails.viewLiveDemo')} ${project.title}`}
                    className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 glass-effect border border-pink-500/30 rounded-full transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_25px_rgba(255,20,147,0.5)] hover:scale-110"
                  >
                    <img 
                      src={Vercel} 
                      alt={t('projectDetails.vercelLogoAlt')} 
                      className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  </a>

                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`${t('projectDetails.viewSourceCode')} ${project.title}`}
                    className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 glass-effect border border-pink-500/30 rounded-full transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_25px_rgba(255,20,147,0.5)] hover:scale-110"
                  >
                    <img 
                      src={Github} 
                      alt={t('projectDetails.githubLogoAlt')} 
                      className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, () => {
          const randomSize = Math.random() * 4 + 2;
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomDuration = Math.random() * 3 + 2;
          const randomDelay = Math.random() * 2;
          const uniqueId = `${randomLeft}-${randomTop}-${randomSize}-${randomDuration}`;
          return (
            <div
              key={`particle-${uniqueId}`}
              className="absolute rounded-full bg-pink-500/20"
              style={{
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                animation: `float ${randomDuration}s ease-in-out infinite`,
                animationDelay: `${randomDelay}s`,
              }}
            ></div>
          );
        })}
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
