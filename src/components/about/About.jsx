import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import MyPicture from '../../assets/minha-foto.jpeg';
import CV from '../../assets/cv.pdf';

/**
 * Componente que exibe informações sobre a desenvolvedora
 * @returns {JSX.Element} Seção "Sobre Mim"
 */
const About = () => {
  const { t } = useTranslation();
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]"
      id='about'
      ref={aboutRef}
    >
      {/* Grid de fundo */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      {/* Efeitos de luz */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-[1] max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="relative px-10 py-8">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 relative"
              >
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                  {t('about.title')}
                </span>
              </h1>
              
              {/* Linha decorativa moderna */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500 to-pink-500"></div>
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-pink-500 to-pink-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Container principal */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Coluna da foto */}
            <div className="relative order-2 md:order-1">
              <div className="relative group">
                {/* Efeito de brilho ao redor */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-300"></div>
                
                {/* Container da imagem com glass effect */}
                <div className="relative glass-effect rounded-2xl p-2 border border-pink-500/30">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={MyPicture} 
                      alt="Andresa Alves, Front End developer"
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Decorações nos cantos */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-pink-500 opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-pink-500 opacity-60"></div>
              </div>
            </div>

            {/* Coluna do texto */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="glass-effect rounded-2xl p-6 md:p-8 border border-pink-500/20">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">👋</span>
                    <TypeAnimation
                      sequence={[
                        t('about.description'),
                        1000,
                      ]}
                      wrapper="p"
                      speed={50}
                      className="text-white/90 text-base md:text-lg leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              {/* Estatísticas ou badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect rounded-xl p-4 border border-pink-500/20 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1">4+</div>
                  <div className="text-sm text-white/70">{t('about.yearsExperience')}</div>
                </div>
                <div className="glass-effect rounded-xl p-4 border border-pink-500/20 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-500 mb-1">Front End</div>
                  <div className="text-sm text-white/70">{t('about.frontEndDeveloper')}</div>
                </div>
              </div>

              {/* Botão de download do CV */}
              <div className="pt-4 flex justify-center">
                  <a 
                  href={CV} 
                  download
                  aria-label="Download Andresa Alves resume in PDF"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:scale-105"
                >
                  <span className="relative z-10">{t('common.downloadCV')}</span>
                  <span className="relative z-10 text-xl">📄</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default About;
