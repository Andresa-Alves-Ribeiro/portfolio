import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MyPicture from '../../assets/minha-foto.jpeg';
import CV from '../../assets/cv.pdf';

/**
 * Componente que exibe informações sobre a desenvolvedora
 * @returns {JSX.Element} Seção "Sobre Mim"
 */
const About = () => {
  const aboutRef = useRef(null);

  return (
    <section 
      className="relative py-24 overflow-hidden"
      id='about'
    >

      <div className="relative z-[1] max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Container principal do título sem bordas e background */}
            <div className="relative px-10 py-8">
              
              {/* Título principal */}
              <div className="relative z-10 flex items-center justify-center">
                <h1 
                  className="diary-title text-4xl md:text-6xl lg:text-7xl font-handwriting relative z-10"
                  data-text="Sobre Mim"
                >
                  Sobre Mim
                </h1>
              </div>
              
              {/* Linha decorativa moderna melhorada */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-pink-300/80 to-pink-400/80 rounded-full decorative-line"></div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 decorative-dot"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 decorative-dot"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 decorative-dot"></div>
                </div>
                <div className="h-1 w-16 bg-gradient-to-l from-transparent via-rose-300/80 to-rose-400/80 rounded-full decorative-line" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Diário aberto - Design Realista com Capa e Folhas */}
        <div className="relative max-w-6xl mx-auto" ref={aboutRef}>
          {/* Sombra principal do diário completo */}
          <div className="absolute -inset-6 bg-gradient-to-br from-gray-400/40 via-gray-600/30 to-gray-400/40 rounded-[45px] blur-3xl transform rotate-1"></div>
          <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 via-transparent to-primary/15 rounded-[40px] blur-2xl"></div>
          
          {/* CAPA TRASEIRA (fundo) */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-[38px] transform -rotate-1 -z-10"
            style={{
              boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.2), 0 20px 60px rgba(0, 0, 0, 0.3)',
              left: '-10px',
              right: '-10px',
              top: '-5px',
              bottom: '-5px'
            }}>
            {/* Textura da capa */}
            <div className="absolute inset-0 opacity-20 rounded-[38px]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* FOLHAS EMPILHADAS (camadas de páginas) - vários tons */}
          {/* Folha 1 (mais abaixo) */}
          <div className="absolute inset-0 bg-white-ivory rounded-[36px] transform rotate-0.5 -z-5" style={{
            left: '-8px',
            right: '-8px',
            top: '-3px',
            bottom: '-3px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}></div>
          
          {/* Folha 2 */}
          <div className="absolute inset-0 bg-pink-50 rounded-[34px] transform -rotate-0.5 -z-4" style={{
            left: '-6px',
            right: '-6px',
            top: '-2px',
            bottom: '-2px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)'
          }}></div>
          
          {/* Folha 3 */}
          <div className="absolute inset-0 bg-rose-50 rounded-[32px] transform rotate-0.3 -z-3" style={{
            left: '-4px',
            right: '-4px',
            top: '-1px',
            bottom: '-1px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)'
          }}></div>
          
          {/* Folha 4 (mais próxima das páginas abertas) */}
          <div className="absolute inset-0 bg-white-snow rounded-[30px] transform -rotate-0.2 -z-2" style={{
            left: '-2px',
            right: '-2px',
            top: '0px',
            bottom: '0px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
          }}></div>
          
          {/* CAPA FRONTAL (frente - lado direito) */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-r-[38px] md:rounded-l-none rounded-l-[38px] md:rounded-r-[38px] transform rotate-1 -z-10"
            style={{
              boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.2), 0 20px 60px rgba(0, 0, 0, 0.3), inset -10px 0 30px rgba(0, 0, 0, 0.15)',
              right: '-12px',
              left: '50%',
              width: 'calc(50% + 24px)',
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0'
            }}>
            {/* Textura da capa */}
            <div className="absolute inset-0 opacity-20 rounded-r-[38px] md:rounded-l-none rounded-l-[38px] md:rounded-r-[38px]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
            {/* Título na capa */}
            <div className="absolute top-1/2 right-8 transform translate-y-1/2 -rotate-90 origin-center text-white font-handwriting text-xl md:text-2xl font-bold opacity-90 whitespace-nowrap">
              Meu Diário
            </div>
          </div>
          
          {/* Container do diário aberto (páginas abertas) */}
          <div className="relative flex flex-col md:flex-row transform perspective-1000 z-10" style={{ perspective: '1000px' }}>
            {/* Página ESQUERDA - Foto (folha aberta no meio) */}
            <div className="relative w-full md:w-1/2 bg-gradient-to-br from-white via-white-ivory to-pink-50 rounded-l-[35px] md:rounded-r-none rounded-r-[35px] md:rounded-l-[35px] p-8 md:p-12 min-h-[500px] md:min-h-[650px] transform md:rotate-y-[-3deg] origin-right transition-transform duration-500 hover:rotate-y-0 z-20"
              style={{
                boxShadow: `
                  inset -15px 0 30px rgba(0, 0, 0, 0.08),
                  inset -5px 0 10px rgba(255, 105, 180, 0.1),
                  -10px 0 40px rgba(0, 0, 0, 0.15),
                  0 0 0 1px rgba(0, 0, 0, 0.05)
                `,
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255, 182, 217, 0.15) 31px, rgba(255, 182, 217, 0.15) 32px),
                  radial-gradient(circle at 20% 30%, rgba(255, 182, 217, 0.05) 0%, transparent 50%),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(254, 249, 251, 0.95))
                `,
                backgroundPosition: '0 80px, 0 0, 0 0'
              }}>
              
              {/* Textura de papel */}
              <div className="absolute inset-0 opacity-[0.03] rounded-l-[35px] md:rounded-r-none rounded-r-[35px] md:rounded-l-[35px]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}></div>
              
              {/* Margem esquerda do caderno com furos */}
              <div className="absolute left-0 top-0 w-10 h-full rounded-l-[35px] md:rounded-r-none rounded-r-[35px] md:rounded-l-[35px]"
                style={{
                  background: `
                    linear-gradient(to right, rgba(255, 182, 217, 0.25) 0%, rgba(255, 182, 217, 0.15) 50%, transparent 100%),
                    repeating-linear-gradient(to bottom, transparent 0, transparent 19px, rgba(255, 182, 217, 0.3) 19px, rgba(255, 182, 217, 0.3) 21px)
                  `
                }}>
                {/* Furos do caderno */}
                <div className="absolute left-2 top-20 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute left-2 top-40 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute left-2 top-60 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute left-2 top-80 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute left-2 top-[100px] w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
              </div>
              
              {/* Reflexo de luz vindo de cima */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-tl-[35px] md:rounded-tr-none rounded-tr-[35px] md:rounded-tl-[35px] pointer-events-none"></div>
              
              {/* Conteúdo da página esquerda */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full pt-8">
                <div className="relative mb-6">
                  {/* Decoração de foto colada */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-light/30 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary-light/20 rounded-full blur-sm"></div>
                  <img 
                    src={MyPicture} 
                    alt="Foto de Andresa Alves, desenvolvedora Full Stack"
                    loading="lazy"
                    className="w-48 md:w-64 h-auto rounded-full border-4 border-primary-light shadow-[0_10px_30px_rgba(255,105,180,0.3),0_0_0_2px_rgba(255,182,217,0.5)] animate-float-cat hover:scale-105 transition-transform duration-300 relative z-10"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                  />
                </div>
                <p className="diary-text text-center text-lg md:text-xl font-handwriting mt-4 relative z-10">
                  Minha foto favorita
                </p>
              </div>
            </div>

            {/* Lombada do diário (dobra realista no meio) */}
            <div className="relative w-3 md:w-4 z-20 flex flex-col items-center"
              style={{
                background: `
                  linear-gradient(to right, 
                    rgba(255, 182, 217, 0.4) 0%,
                    rgba(255, 105, 180, 0.5) 20%,
                    rgba(255, 20, 147, 0.6) 50%,
                    rgba(255, 105, 180, 0.5) 80%,
                    rgba(255, 182, 217, 0.4) 100%
                  )
                `,
                boxShadow: `
                  inset -2px 0 10px rgba(0, 0, 0, 0.2),
                  inset 2px 0 10px rgba(0, 0, 0, 0.1),
                  0 0 20px rgba(255, 105, 180, 0.3)
                `
              }}>
              {/* Anéis da lombada */}
              <div className="absolute top-12 w-6 h-6 border-2 border-primary-dark/30 rounded-full"></div>
              <div className="absolute top-24 w-6 h-6 border-2 border-primary-dark/30 rounded-full"></div>
              <div className="absolute top-36 w-6 h-6 border-2 border-primary-dark/30 rounded-full"></div>
              <div className="absolute bottom-12 w-6 h-6 border-2 border-primary-dark/30 rounded-full"></div>
              <div className="absolute bottom-24 w-6 h-6 border-2 border-primary-dark/30 rounded-full"></div>
            </div>

            {/* Página DIREITA - Texto (folha aberta) */}
            <div className="relative w-full md:w-1/2 bg-gradient-to-br from-white-snow via-white-cream to-rose-50 rounded-r-[35px] md:rounded-l-none rounded-l-[35px] md:rounded-r-[35px] p-8 md:p-12 min-h-[500px] md:min-h-[650px] transform md:rotate-y-[3deg] origin-left transition-transform duration-500 hover:rotate-y-0 z-20"
              style={{
                boxShadow: `
                  inset 15px 0 30px rgba(0, 0, 0, 0.08),
                  inset 5px 0 10px rgba(255, 105, 180, 0.1),
                  10px 0 40px rgba(0, 0, 0, 0.15),
                  0 0 0 1px rgba(0, 0, 0, 0.05)
                `,
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255, 182, 217, 0.15) 31px, rgba(255, 182, 217, 0.15) 32px),
                  radial-gradient(circle at 80% 30%, rgba(255, 182, 217, 0.05) 0%, transparent 50%),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(254, 249, 251, 0.95))
                `,
                backgroundPosition: '0 80px, 0 0, 0 0'
              }}>
              
              {/* Textura de papel */}
              <div className="absolute inset-0 opacity-[0.03] rounded-r-[35px] md:rounded-l-none rounded-l-[35px] md:rounded-r-[35px]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}></div>
              
              {/* Margem direita do caderno com furos */}
              <div className="absolute right-0 top-0 w-10 h-full rounded-r-[35px] md:rounded-l-none rounded-l-[35px] md:rounded-r-[35px]"
                style={{
                  background: `
                    linear-gradient(to left, rgba(255, 182, 217, 0.25) 0%, rgba(255, 182, 217, 0.15) 50%, transparent 100%),
                    repeating-linear-gradient(to bottom, transparent 0, transparent 19px, rgba(255, 182, 217, 0.3) 19px, rgba(255, 182, 217, 0.3) 21px)
                  `
                }}>
                {/* Furos do caderno */}
                <div className="absolute right-2 top-20 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute right-2 top-40 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute right-2 top-60 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute right-2 top-80 w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
                <div className="absolute right-2 top-[100px] w-1 h-1 bg-primary-light rounded-full opacity-40"></div>
              </div>
              
              {/* Reflexo de luz vindo de cima */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-tr-[35px] md:rounded-tl-none rounded-tl-[35px] md:rounded-tr-[35px] pointer-events-none"></div>
              
              {/* Conteúdo da página direita */}
              <div className="relative z-10 h-full flex flex-col justify-center pt-8">
                <div className="mb-8">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl animate-float-cat mt-1 relative z-10">🐱</span>
                    <TypeAnimation
                      sequence={[
                        'Olá! Sou Andresa, uma desenvolvedora Full Stack apaixonada por criar experiências digitais incríveis. Com experiência em desenvolvimento web, mobile e desktop, busco sempre entregar soluções inovadoras e de alta qualidade. Minha jornada na tecnologia começou na infância com uma curiosidade por como as coisas funcionavam na internet, e hoje transformo essa paixão em código que impacta positivamente a vida das pessoas.',
                        1000,
                      ]}
                      wrapper="p"
                      speed={50}
                      className="diary-text text-lg md:text-xl leading-relaxed relative z-10"
                    />
                  </div>
                </div>

                <div className='mt-8 text-center relative z-10'>
                  <a 
                    href={CV} 
                    download
                    aria-label="Baixar currículo de Andresa Alves em PDF"
                    className="pink-button inline-flex items-center gap-2 no-underline relative z-10"
                  >
                    <span>Baixe meu CV</span>
                    <span className="text-xl">📄</span>
                  </a>
                </div>
                
                {/* Anotação decorativa */}
                <div className="absolute bottom-8 right-8 text-sm font-handwriting text-primary-dark/60 italic transform rotate-6">
                  Meu diário!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
