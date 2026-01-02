import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MyPicture from '../../assets/minha-foto.png';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../hooks/useTheme';

/**
 * Componente que exibe informações sobre a desenvolvedora
 * @returns {JSX.Element} Seção "Sobre Mim"
 */
const About = () => {
  const aboutRef = useRef(null);
  const { isDarkMode } = useTheme();

  return (
    <section 
      className={`relative py-24 bg-gradient-to-br from-[rgba(255,0,193,0.1)] to-[rgba(255,136,228,0.1)] backdrop-blur-[10px] transition-colors duration-300 overflow-hidden border-t border-[rgba(255,105,180,0.2)] mx-8 rounded-[15px_80px_20px_70px] shadow-[0_0_20px_rgba(255,0,193,0.1),0_0_40px_rgba(255,136,228,0.1),inset_0_0_20px_rgba(255,0,193,0.05)] animate-[borderRadiusAnimation_10s_ease-in-out_infinite] ${
        isDarkMode ? 'dark-mode' : ''
      }`}
      id='about'
    >
      <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 
              className="text-5xl md:text-7xl font-semibold font-serif text-primary relative uppercase tracking-[8px] m-0 p-0 animate-[digitalPulse_3s_ease-in-out_infinite] drop-shadow-[0_0_2px_rgba(255,0,193,0.3),0_0_4px_rgba(255,136,228,0.2),0_0_6px_rgba(255,58,210,0.1)]" 
              data-text="Sobre Mim"
            >
              Sobre Mim
            </h1>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center' ref={aboutRef}>
          <div className="relative w-full max-w-[400px] mx-auto md:max-w-[300px]">
            <div className="relative w-full h-full transform-style-preserve-3d perspective-[1000px]">
              <img 
                src={MyPicture} 
                alt="Foto de Andresa Alves, desenvolvedora Full Stack"
                loading="lazy"
                className="w-full h-auto rounded-full relative z-[1] brightness-[1.1] contrast-[1.1] transition-all duration-500 border-4 border-[#00f7ff] animate-[imageFloat_6s_ease-in-out_infinite] hover:translate-z-[20px] hover:rotate-x-[5deg] hover:rotate-y-[5deg] hover:scale-105"
              />
            </div>
          </div>

          <div className="text-xl leading-relaxed text-white font-sans font-light tracking-wide md:text-base">
            <div className="relative p-10 bg-[rgba(255,255,255,0.1)] rounded-[15px] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transform-style-preserve-3d perspective-[1000px] transition-transform duration-300 overflow-hidden hover:translate-z-[20px] hover:rotate-x-[5deg] hover:bg-[rgba(255,255,255,0.15)]">
              <div className="mb-8 relative z-[1]">
                <TypeAnimation
                  sequence={[
                    'Olá! Sou Andresa, uma desenvolvedora Full Stack apaixonada por criar experiências digitais incríveis. Com experiência em desenvolvimento web, mobile e desktop, busco sempre entregar soluções inovadoras e de alta qualidade. Minha jornada na tecnologia começou na infância com uma curiosidade por como as coisas funcionavam na internet, e hoje transformo essa paixão em código que impacta positivamente a vida das pessoas.',
                    1000,
                  ]}
                  wrapper="p"
                  speed={50}
                  style={{ fontSize: '1em', lineHeight: '1.6' }}
                />
              </div>

              <div className='mt-8 text-center'>
                <a 
                  href={CV} 
                  download
                  aria-label="Baixar currículo de Andresa Alves em PDF"
                  className="relative inline-flex items-center gap-2 py-3 px-6 text-[rgba(255,255,255,0.8)] no-underline font-light transition-all duration-300 bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)] hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,105,180,0.2)] hover:translate-x-1 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-[rgba(255,105,180,0.8)] before:via-[rgba(135,206,235,0.8)] before:to-[rgba(147,112,219,0.8)] before:transition-all before:duration-300 hover:before:w-full"
                >
                  <span>Baixe meu CV</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="md:w-4 md:h-4"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
