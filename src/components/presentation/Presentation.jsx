import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../header';
import { getWindow, getWindowWidth, getWindowHeight } from '../../utils/environment';

const Presentation = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInPresentation, setIsInPresentation] = useState(true);

  useEffect(() => {
    const win = getWindow();
    if (!win) return;

    const handleMouseMove = (e) => {
      const width = getWindowWidth(1920);
      const height = getWindowHeight(1080);
      setMousePosition({
        x: (e.clientX / width) * 100,
        y: (e.clientY / height) * 100,
      });
    };

    const handleScroll = () => {
      const presentationElement = document.getElementById('presentation');
      if (presentationElement) {
        const rect = presentationElement.getBoundingClientRect();
        const height = getWindowHeight(1080);
        setIsInPresentation(rect.top >= -100 && rect.bottom > height * 0.5);
      }
    };

    win.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    win.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      win.removeEventListener('mousemove', handleMouseMove);
      win.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div 
      id='presentation' 
      className="relative flex justify-center items-center min-h-screen pt-0 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]"
    >
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
        {Array.from({ length: 5 }, (_, i) => {
          const lineId = `line-${i}`;
          return (
            <div
              key={lineId}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Header */}
      <Header isInPresentation={isInPresentation} showNavLinks={true} />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Badge superior */}
          <div className="mb-8 px-4 py-2 glass-effect rounded-full border border-pink-500/30">
            <span className="text-xs md:text-sm text-pink-400 font-medium tracking-wider">
              {t('presentation.badge')}
            </span>
          </div>

          {/* Título principal com efeito neon */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            <span className="block mb-2 neon-text">{t('presentation.title1')}</span>
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              {t('presentation.title2')}
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 font-light tracking-wide max-w-2xl">
            {t('presentation.subtitle')}
          </p>

          {/* Botão CTA */}
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 md:px-10 md:py-5 border-2 border-pink-500 text-white font-semibold text-base md:text-lg tracking-wider uppercase transition-all duration-300 hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">{t('common.explore')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="group relative text-white/60 transition-all duration-300"
              aria-label={t('common.scrollDown')}
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute inset-0 bg-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></span>
            </button>
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
  )
}

export default Presentation
