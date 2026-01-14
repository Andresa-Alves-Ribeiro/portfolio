import React, { useEffect, useState } from 'react';
import { scrollToElement } from '../../utils/helpers';
import InicialLogo from '../../assets/iniciais.png';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { APP_CONFIG } from '../../constants/config';

const Presentation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInPresentation, setIsInPresentation] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      const presentationElement = document.getElementById('presentation');
      if (presentationElement) {
        const rect = presentationElement.getBoundingClientRect();
        setIsInPresentation(rect.top >= -100 && rect.bottom > window.innerHeight * 0.5);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    const targetId = link.getAttribute('href')?.substring(1);
    if (targetId) {
      scrollToElement(targetId);
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
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navbar futurista */}
      <nav className={`fixed top-0 left-0 w-full z-[1001] px-6 md:px-12 lg:px-16 py-6 transition-all duration-500 ${
        isInPresentation ? 'bg-transparent' : 'glass-effect bg-[#0a0a0f]/80 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`font-bold text-xl md:text-2xl tracking-wide transition-colors duration-500 ${
            isInPresentation ? 'text-white neon-text' : 'text-pink-500'
          }`}>
            <img src={InicialLogo} alt="Logo" className="w-16 h-16 md:w-14 md:h-14" />
          </div>

          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              {[
                { label: 'ABOUT', href: '#about' },
                { label: 'TIMELINE', href: '#timeline' },
                { label: 'SKILLS', href: '#skills' },
                { label: 'PROJECTS', href: '#projects' },
                { label: 'CONTACT', href: '#contact' }
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`relative text-xs lg:text-sm font-medium tracking-wider uppercase transition-all duration-300 group ${
                      isInPresentation ? 'text-white/80' : 'text-white/60'
                    }`}
                  >
                    <span className="relative z-10 group-hover:text-pink-500 transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                    <span className="absolute inset-0 bg-pink-500/10 rounded-md opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
                  </a>
                  {index < 4 && (
                    <span className={`text-xs mx-1 transition-colors duration-500 ${
                      isInPresentation ? 'text-white/30' : 'text-white/20'
                    }`}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <a 
                href={APP_CONFIG.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative transition-all duration-300 ${
                  isInPresentation ? 'text-white/80' : 'text-white/60'
                }`}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:rotate-3" style={{ fill: 'currentColor' }} />
                <span className="absolute inset-0 bg-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></span>
              </a>
              <a 
                href={APP_CONFIG.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative transition-all duration-300 ${
                  isInPresentation ? 'text-white/80' : 'text-white/60'
                }`}
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:rotate-3" style={{ fill: 'currentColor' }} />
                <span className="absolute inset-0 bg-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></span>
              </a>
              <a 
                href={`https://api.whatsapp.com/send?phone=${APP_CONFIG.socialLinks.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative transition-all duration-300 ${
                  isInPresentation ? 'text-white/80' : 'text-white/60'
                }`}
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110 group-hover:rotate-3" style={{ fill: 'currentColor' }} />
                <span className="absolute inset-0 bg-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Badge superior */}
          <div className="mb-8 px-4 py-2 glass-effect rounded-full border border-pink-500/30">
            <span className="text-xs md:text-sm text-pink-400 font-medium tracking-wider">
              FRONT END DEVELOPER
            </span>
          </div>

          {/* Título principal com efeito neon */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            <span className="block mb-2 neon-text">Crafting Digital</span>
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              Experiences
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 font-light tracking-wide max-w-2xl">
            Developing innovative solutions with code and creativity
          </p>

          {/* Botão CTA */}
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 md:px-10 md:py-5 border-2 border-pink-500 text-white font-semibold text-base md:text-lg tracking-wider uppercase transition-all duration-300 hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Explore</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="group relative text-white/60 transition-all duration-300"
              aria-label="Scroll down"
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
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-500/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
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
