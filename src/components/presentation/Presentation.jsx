import React from 'react';

const Presentation = () => {
  return (
    <div id='presentation' className="relative flex justify-center items-center min-h-screen pt-[100px] md:pt-0 md:min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background inovador com padrões geométricos complexos */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 via-rose-50 via-pink-100 to-white-cream"></div>
      
      {/* Padrão de grade geométrica futurista */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ff69b4" strokeWidth="1"/>
            </pattern>
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff69b4', stopOpacity: 0.1 }} />
              <stop offset="50%" style={{ stopColor: '#ff1493', stopOpacity: 0.05 }} />
              <stop offset="100%" style={{ stopColor: '#ff69b4', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Formas geométricas 3D flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexágonos decorativos */}
        <svg className="absolute top-10 left-10 w-32 h-32 opacity-10 animate-pulse" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="hexGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff69b4', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#ff1493', stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="url(#hexGrad1)" />
        </svg>
        
        <svg className="absolute bottom-20 right-20 w-40 h-40 opacity-8 animate-pulse" style={{ animationDelay: '1s' }} viewBox="0 0 100 100">
          <defs>
            <linearGradient id="hexGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f472b6', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.15 }} />
            </linearGradient>
          </defs>
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="url(#hexGrad2)" />
        </svg>

        {/* Círculos com gradientes múltiplos */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-pink-200/25 via-rose-300/20 to-pink-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-rose-200/25 via-pink-300/20 to-rose-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-pink-100/15 via-rose-200/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Linhas diagonais decorativas */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="diagonalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ff69b4', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#f472b6', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#ff1493', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <line x1="0" y1="0" x2="1200" y2="800" stroke="url(#diagonalGrad)" strokeWidth="2" />
            <line x1="1200" y1="0" x2="0" y2="800" stroke="url(#diagonalGrad)" strokeWidth="2" />
          </svg>
        </div>

        {/* Partículas flutuantes */}
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = Math.random() * 3 + 4;
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-gradient-to-br from-pink-300/40 to-rose-400/30 blur-sm"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animation: `float-cat ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>

      {/* Container principal */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12">
        <div className="relative">
          {/* Efeito de brilho ao redor */}
          <div className="absolute -inset-6 bg-gradient-to-r from-pink-200/30 via-rose-300/30 via-pink-400/30 to-rose-200/30 rounded-[2rem] blur-2xl -z-10 animate-pulse"></div>
          
          {/* Card principal com glassmorphism avançado */}
          <div 
            className="relative backdrop-blur-2xl bg-white/75 border border-pink-200/40 rounded-[2rem] p-8 md:p-16 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,248,248,0.75) 25%, rgba(252,231,243,0.7) 50%, rgba(254,242,248,0.75) 75%, rgba(255,241,242,0.85) 100%)',
              boxShadow: `
                0 32px 64px -12px rgba(255, 105, 180, 0.2),
                0 0 0 1px rgba(255, 182, 217, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `
            }}>
            
            {/* Decoração vetorial superior */}
            <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden rounded-tr-[2rem]">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="cornerGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff69b4', stopOpacity: 0.25 }} />
                    <stop offset="50%" style={{ stopColor: '#f472b6', stopOpacity: 0.15 }} />
                    <stop offset="100%" style={{ stopColor: '#ff1493', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                <polygon points="0,0 200,0 200,200" fill="url(#cornerGradTop)" />
              </svg>
            </div>

            {/* Decoração vetorial inferior esquerda */}
            <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden rounded-bl-[2rem]">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="cornerGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff1493', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: '#ff69b4', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                <polygon points="0,200 0,0 200,200" fill="url(#cornerGradBottom)" />
              </svg>
            </div>

            {/* Conteúdo principal */}
            <div className="relative z-10">
              {/* Apresentação criativa */}
              <div className="flex justify-center items-center mb-8 animate-fade-in">
                <div className="relative inline-block px-6 py-3 bg-gradient-to-r from-pink-100/90 via-rose-100/90 via-pink-200/80 to-rose-100/90 backdrop-blur-md rounded-full border border-pink-200/60 shadow-lg">
                  <h4 className='text-sm md:text-base lg:text-lg font-handwriting font-bold text-primary-dark text-center flex items-center gap-2 flex-wrap justify-center'>
                    <span className="inline-block">Bem vindo ao meu</span>
                    <span className="inline-flex items-center gap-1 relative">
                      <span className="relative inline-block group">
                        <span className="line-through decoration-3 decoration-primary-dark/70 relative z-0 text-primary-dark/50">
                          diário
                        </span>
                        <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-dark/40 transform -translate-y-1/2"></span>
                        <span className="absolute -top-2 -right-2 text-lg animate-wiggle opacity-80">🐱</span>
                      </span>
                      <span className="text-primary-dark animate-bounce-cute">💕</span>
                      <span className="text-primary-dark relative z-10 font-bold bg-gradient-to-r from-pink-200/50 to-rose-200/50 px-2 py-1 rounded-md backdrop-blur-sm">
                        portfólio
                      </span>
                    </span>
                  </h4>
                  <div className="absolute -top-2 -right-2 text-xl animate-sparkle opacity-70">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-lg animate-wiggle opacity-70">🐾</div>
                </div>
              </div>

              {/* Saudação moderna */}
              <div className="text-center mb-8">
                <h5 className='text-xl md:text-2xl lg:text-3xl font-handwriting font-semibold text-primary-dark/90 mb-6 tracking-wide'>
                  Olá!! Eu sou
                </h5>
                {/* Linha decorativa vetorial moderna */}
                <div className="flex justify-center items-center mb-10">
                  <svg width="300" height="6" viewBox="0 0 300 6" className="mx-auto">
                    <defs>
                      <linearGradient id="lineDecoModern" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'transparent' }} />
                        <stop offset="20%" style={{ stopColor: '#ff69b4', stopOpacity: 0.3 }} />
                        <stop offset="50%" style={{ stopColor: '#ff1493' }} />
                        <stop offset="80%" style={{ stopColor: '#f472b6', stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: 'transparent' }} />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="3" x2="300" y2="3" stroke="url(#lineDecoModern)" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              
              {/* Nome com efeito moderno e gradiente múltiplo */}
              <div className='text-center mb-12'>
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
                  {['A', 'n', 'd', 'r', 'e', 's', 'a', ' ', 'A', 'l', 'v', 'e', 's'].map((letter, index) => {
                    const uniqueKey = letter === ' ' ? `space-${index}` : `${letter}-${index}`;
                    return (
                      <span
                        key={uniqueKey}
                        className="inline-block text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-primary-dark via-primary via-pink-500 to-primary-light bg-clip-text text-transparent animate-fade-in hover:scale-110 transition-all duration-300 cursor-default drop-shadow-lg"
                        style={{ 
                          animationDelay: `${index * 0.08}s`,
                          filter: 'drop-shadow(0 2px 4px rgba(255, 105, 180, 0.3))'
                        }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                </div>
              </div>
              
              {/* Subtítulo profissional com múltiplos tons */}
              <div className="text-center mb-8">
                <div className="inline-block px-10 py-5 bg-gradient-to-r from-white/70 via-pink-50/70 via-rose-50/70 to-white/70 backdrop-blur-lg rounded-2xl border border-pink-200/40 shadow-xl">
                  <h5 className='text-xl md:text-2xl lg:text-3xl font-serif italic font-normal bg-gradient-to-r from-primary-dark via-primary to-pink-500 bg-clip-text text-transparent tracking-wide'>
                    Desenvolvedora Front-End
                  </h5>
                </div>
              </div>

              {/* Decoração inferior moderna */}
              <div className="mt-12 flex justify-center items-center">
                <div className="relative">
                  {/* Círculos concêntricos decorativos */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-rose-300/40 to-pink-400/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 via-pink-300/30 to-rose-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Bordas decorativas vetoriais modernas */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl"></div>
            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl"></div>
            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl"></div>
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-primary/40 rounded-br-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
