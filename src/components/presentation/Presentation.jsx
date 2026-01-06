import React from 'react';
import MyPicture from '../../assets/minha-foto.png';
import { scrollToElement } from '../../utils/helpers';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-nav.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg';
import { APP_CONFIG } from '../../constants/config';

const Presentation = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href')?.substring(1);
    if (targetId) {
      scrollToElement(targetId);
    }
  };

  const [isInPresentation, setIsInPresentation] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const presentationElement = document.getElementById('presentation');
      if (presentationElement) {
        const rect = presentationElement.getBoundingClientRect();
        setIsInPresentation(rect.top >= -100 && rect.bottom > window.innerHeight * 0.5);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='presentation' className="relative flex justify-center items-center min-h-screen pt-0 overflow-hidden">
      {/* Header fixo com links de navegação no topo */}
      <nav className={`fixed top-0 left-0 w-full z-[1001] px-6 md:px-12 lg:px-16 py-6 md:py-8 transition-all duration-500 ${
        isInPresentation ? '' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo/Texto à esquerda */}
          <div className={`font-bold text-xl md:text-2xl tracking-wide transition-colors duration-500 ${
            isInPresentation ? 'text-white' : 'text-primary-dark'
          }`}>
            Portfolio
          </div>

          {/* Links de navegação e ícones sociais à direita */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {/* Links de navegação */}
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
                    className={`text-xs lg:text-sm font-light tracking-[0.15em] uppercase hover:opacity-80 transition-all duration-300 ${
                      isInPresentation ? 'text-white' : 'text-primary-dark'
                    }`}
                  >
                    {item.label}
                  </a>
                  {index < 4 && (
                    <span className={`text-xs mx-1 transition-colors duration-500 ${
                      isInPresentation ? 'text-white/50' : 'text-primary-dark/50'
                    }`}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Ícones sociais */}
            <div className="flex items-center gap-3 md:gap-4">
              <a 
                href={APP_CONFIG.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:opacity-80 transition-opacity duration-300 ${
                  isInPresentation ? 'text-white' : 'text-primary-dark'
                }`}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" style={{ fill: 'currentColor' }} />
              </a>
              <a 
                href={APP_CONFIG.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:opacity-80 transition-opacity duration-300 ${
                  isInPresentation ? 'text-white' : 'text-primary-dark'
                }`}
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 md:w-6 md:h-6" style={{ fill: 'currentColor' }} />
              </a>
              <a 
                href={`https://api.whatsapp.com/send?phone=${APP_CONFIG.socialLinks.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:opacity-80 transition-opacity duration-300 ${
                  isInPresentation ? 'text-white' : 'text-primary-dark'
                }`}
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-5 h-5 md:w-6 md:h-6" style={{ fill: 'currentColor' }} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Imagem de fundo com overlay duotone */}
      <div className="absolute inset-0 w-full h-full">
        {/* Imagem de fundo */}
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${MyPicture})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay duotone vibrante - Rosa/Magenta e Azul/Teal */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 20, 147, 0.90) 0%, 
                  rgba(236, 64, 122, 0.85) 15%,
                  rgba(255, 105, 180, 0.80) 30%,
                  rgba(255, 20, 147, 0.75) 45%,
                  rgba(180, 0, 212, 0.7) 55%,
                  rgba(145, 0, 167, 0.75) 70%,
                  rgba(117, 0, 143, 0.8) 85%,
                  rgba(58, 0, 100, 0.85) 100%
                )
              `,
              mixBlendMode: 'multiply'
            }}
          ></div>
          
          {/* Overlay adicional diagonal para efeito duotone mais pronunciado */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(45deg,
                  rgba(255, 20, 147, 0.5) 0%,
                  rgba(255, 105, 180, 0.3) 30%,
                  transparent 50%,
                  rgba(0, 188, 212, 0.3) 70%,
                  rgba(0, 151, 167, 0.5) 100%
                )
              `,
              mixBlendMode: 'overlay'
            }}
          ></div>
          
          {/* Overlay escuro sutil para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
        </div>
      </div>

      {/* Conteúdo principal centralizado */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Título principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Crafting Digital
            <br />
            <span className="block mt-2">Experiences</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
            The work of developer Andresa Alves
          </p>

          {/* Botão CTA */}
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 md:px-10 md:py-5 border-2 border-white text-white font-semibold text-base md:text-lg tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-[#ff1493] hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)] backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Setas de navegação laterais */}
      <button 
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
        aria-label="Próximo slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-white/80 hover:text-white transition-colors duration-300"
          aria-label="Scroll para baixo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Dots de paginação */}
      <div className="absolute bottom-8 right-8 md:right-12 lg:right-16 z-20 flex flex-col gap-2">
        {[1, 2, 3].map((dot, index) => (
          <button
            key={dot}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === 0 
                ? 'bg-white h-10 shadow-[0_0_12px_rgba(255,255,255,0.5)]' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${dot}`}
          />
        ))}
      </div>

      {/* Efeito de brilho sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default Presentation
