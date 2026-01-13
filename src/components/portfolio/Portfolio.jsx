import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { portfolioLinks } from '../../constants/portfolioLinks';

/**
 * Componente que exibe o portfólio de projetos em estilo carrossel interativo
 * @returns {JSX.Element} Seção de portfólio
 */
const Portfolio = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    const currentRef = aboutRef.current;

    if (currentRef) {
      scrollReveal.reveal(currentRef, {
        duration: 1000,
        delay: 500,
        easing: 'ease-in-out',
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
      });
    }

    return () => {
      if (scrollReveal && currentRef) {
        scrollReveal.clean(currentRef);
      }
    };
  }, []);

  // Cores vibrantes para cada card
  const cardColors = [
    { bg: '#DC2626', text: 'white' }, // Vermelho escuro
    { bg: '#FDE047', text: '#1A1A1A' }, // Amarelo claro
    { bg: '#EC4899', text: 'white' }, // Rosa/Magenta
    { bg: '#FB923C', text: 'white' }, // Laranja
    { bg: '#8B5CF6', text: 'white' }, // Roxo
    { bg: '#06B6D4', text: 'white' }, // Ciano
    { bg: '#10B981', text: 'white' }, // Verde
    { bg: '#F59E0B', text: 'white' }, // Amarelo
    { bg: '#EF4444', text: 'white' }, // Vermelho
    { bg: '#6366F1', text: 'white' }, // Índigo
    { bg: '#14B8A6', text: 'white' }, // Teal
    { bg: '#F97316', text: 'white' }, // Laranja escuro
    { bg: '#A855F7', text: 'white' }, // Roxo claro
    { bg: '#3B82F6', text: 'white' }, // Azul
    { bg: '#22C55E', text: 'white' }, // Verde claro
    { bg: '#EAB308', text: '#1A1A1A' }, // Amarelo
    { bg: '#F43F5E', text: 'white' }, // Rosa
  ];

  // Definir card ativo inicial como o primeiro
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const isManualNavigation = useRef(false);

  // Quantidade de cards visíveis no carrossel (incluindo o ativo)
  const visibleCards = 10;
  const cardsPerNavigation = 1; // Quantos cards avançar por navegação

  // Função para navegar para o próximo (apenas move o carrossel, não expande cards)
  const handleNext = () => {
    isManualNavigation.current = true;
    const maxStartIndex = Math.max(0, portfolioLinks.length - visibleCards);
    const newStartIndex = Math.min(carouselStartIndex + cardsPerNavigation, maxStartIndex);
    setCarouselStartIndex(newStartIndex);
    setTimeout(() => {
      isManualNavigation.current = false;
    }, 100);
  };

  // Função para navegar para o anterior (apenas move o carrossel, não expande cards)
  const handlePrev = () => {
    isManualNavigation.current = true;
    const newStartIndex = Math.max(0, carouselStartIndex - cardsPerNavigation);
    setCarouselStartIndex(newStartIndex);
    setTimeout(() => {
      isManualNavigation.current = false;
    }, 100);
  };

  // Função para atualizar carrossel quando o índice ativo muda por clique (apenas se necessário)
  useEffect(() => {
    // Não ajusta se foi navegação manual
    if (isManualNavigation.current) {
      return;
    }

    // Só ajusta se o card ativo estiver fora da área visível
    setCarouselStartIndex((prevStartIndex) => {
      if (currentActiveIndex < prevStartIndex) {
        // Card ativo está antes da área visível
        return Math.max(0, currentActiveIndex);
      } else if (currentActiveIndex >= prevStartIndex + visibleCards) {
        // Card ativo está depois da área visível
        const maxStartIndex = Math.max(0, portfolioLinks.length - visibleCards);
        return Math.min(currentActiveIndex - visibleCards + 1, maxStartIndex);
      }
      return prevStartIndex;
    });
  }, [currentActiveIndex, visibleCards]);

  // Calcular quais cards mostrar
  const visibleCardsList = portfolioLinks.slice(
    carouselStartIndex,
    Math.min(carouselStartIndex + visibleCards, portfolioLinks.length)
  );

  // Função para clarear uma cor hex
  const lightenColor = (hex, percent = 60) => {
    // Remove o # se presente
    const color = hex.replace('#', '');

    // Converter para RGB
    const num = Number.parseInt(color, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;

    // Clarear a cor
    const lighten = (value) => {
      return Math.min(255, value + (255 - value) * (percent / 100));
    };

    const newR = Math.round(lighten(r));
    const newG = Math.round(lighten(g));
    const newB = Math.round(lighten(b));

    // Converter de volta para hex
    const toHex = (n) => {
      const hex = n.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
  };

  // Obter a cor do card ativo e criar versão clara
  const activeCardColor = cardColors[currentActiveIndex % cardColors.length].bg;
  const lightBackgroundColor = lightenColor(activeCardColor, 70);

  return (
    <>
      {/* Título da seção - fora do container que muda de cor */}
      <div className="text-center py-8 px-4 md:px-8 relative z-20" id='projects-title'>
        <div className="relative inline-block">
          <h1
            className="diary-title text-4xl md:text-6xl lg:text-7xl font-handwriting relative z-10 mb-4"
            data-text="Projetos"
            style={{
              color: '#ff1493',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Projetos
          </h1>

          {/* Linha decorativa */}
          <div className="relative z-10 flex items-center justify-center gap-3 mt-4">
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

      {/* Container principal com background que muda */}
      <div
        className='mb-[10vh] py-16 px-4 md:px-8 min-h-screen flex flex-col'
        id='projects'
        style={{
          backgroundColor: lightBackgroundColor,
          transition: 'background-color 1s ease-in-out'
        }}
      >

        {/* Carrossel estilo CodePen */}
        <div ref={aboutRef} className="flex-1 flex items-center justify-center px-4 relative">
          {/* Botão anterior */}
          {carouselStartIndex > 0 && (
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Projeto anterior"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Botão próximo */}
          {carouselStartIndex + visibleCards < portfolioLinks.length && (
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Próximo projeto"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            className="mx-auto h-[600px] relative"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: `${Math.max(900, (visibleCards - 1) * 180 + 500)}px`,
              maxWidth: '100%'
            }}
          >
            <div className="relative w-full h-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {(() => {
                // Calcular larguras uma única vez para todos os cards (fora do map)
                const inactiveWidth = 180;
                const activeWidth = 500;
                const containerWidth = Math.max(900, (visibleCards - 1) * inactiveWidth + activeWidth);

                // Calcular largura atual do card ativo (isso muda durante a animação)
                const activeGlobalIndex = currentActiveIndex;
                const activeLocalIndex = activeGlobalIndex - carouselStartIndex;

                // Calcular largura atual do card ativo (será usado por todos os cards)
                const cardWidths = visibleCardsList.map((_, idx) => {
                  const cardGlobalIndex = carouselStartIndex + idx;
                  const cardIsActive = cardGlobalIndex === activeGlobalIndex;
                  return cardIsActive ? activeWidth : inactiveWidth;
                });

                // Calcular largura total (para referência, mas será recalculado por card)

                return visibleCardsList.map((item, localIndex) => {
                  const globalIndex = carouselStartIndex + localIndex;
                  const isActive = currentActiveIndex === globalIndex;
                  const color = cardColors[globalIndex % cardColors.length];

                  // Apenas largura muda, altura permanece constante
                  const width = isActive ? 500 : 180;
                  const height = 600;

                  // Recalcular cardWidths considerando a largura atual deste card se for o ativo
                  // Isso permite que os cards se reposicionem conforme o card ativo expande
                  const adjustedCardWidths = [...cardWidths];
                  if (isActive && activeLocalIndex === localIndex) {
                    // Substituir a largura do card ativo pela largura atual (que está animando de 180 para 500)
                    adjustedCardWidths[localIndex] = width;
                  }

                  // Calcular posição baseada nas larguras ajustadas
                  const adjustedTotalWidth = adjustedCardWidths.reduce((sum, w) => sum + w, 0);
                  const adjustedBaseLeft = (containerWidth - adjustedTotalWidth) / 2;

                  // Calcular posição incrementalmente, somando a largura de cada card anterior
                  let leftPosition = adjustedBaseLeft;
                  for (let i = 0; i < localIndex; i++) {
                    leftPosition += adjustedCardWidths[i];
                  }

                  return (
                    <button
                      key={item.title}
                      type="button"
                      className="absolute cursor-pointer rounded-3xl overflow-hidden border-0 p-0"
                      style={{
                        backgroundColor: color.bg,
                        width: `${width}px`,
                        height: `${height}px`,
                        left: `${leftPosition}px`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1), left 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: localIndex + 1,
                      }}
                      onClick={() => setCurrentActiveIndex(globalIndex)}
                      aria-label={`Expandir card ${item.title}`}
                    >
                      <div className="relative w-full h-full flex flex-col p-6 md:p-8">
                        {/* Ícone pequeno no topo esquerdo */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={`Icon ${item.title}`}
                                className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
                              />
                            )}
                          </div>
                        </div>

                        {/* Título */}
                        <div className={`flex items-center justify-center ${isActive ? 'mb-4' : 'flex-1'}`} style={{ height: isActive ? 'auto' : '100%' }}>
                          <h2
                            className="font-handwriting font-bold transition-all duration-700"
                            style={{
                              color: color.text,
                              fontSize: isActive ? '4rem' : '1.5rem',
                              writingMode: isActive ? 'horizontal-tb' : 'vertical-rl',
                              textOrientation: 'mixed',
                              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          >
                            {item.title.toUpperCase()}
                          </h2>
                        </div>

                        {/* Conteúdo adicional quando expandido */}
                        {isActive && (
                          <div className="flex-1 flex flex-col items-center animate-fade-in overflow-y-auto">
                            {/* Imagem completa do projeto */}
                            {item.image && (
                              <div className="w-full max-w-full mb-4 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                  src={item.image}
                                  alt={`Imagem completa do projeto ${item.title}`}
                                  className="w-full h-auto object-cover"
                                  loading="lazy"
                                />
                              </div>
                            )}

                            {/* Tags de tecnologias */}
                            <div className='flex justify-center items-center flex-wrap gap-2 mb-4'>
                              {item.stacks.slice(0, 3).map((stack) => (
                                <span
                                  key={stack}
                                  className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-handwriting font-semibold rounded-full"
                                >
                                  {stack}
                                </span>
                              ))}
                              {item.stacks.length > 3 && (
                                <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-handwriting font-semibold rounded-full">
                                  +{item.stacks.length - 3}
                                </span>
                              )}
                            </div>

                            {/* Botão para ir para a página do projeto */}
                            <div className="flex justify-center">
                              <Link
                                to={`/project/${item.title}`}
                                className="relative px-8 py-4 bg-white/30 backdrop-blur-sm text-white font-handwriting font-bold rounded-full hover:bg-white/40 transition-all duration-300 inline-block hover:scale-105 shadow-lg"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`Ver detalhes do projeto ${item.title}`}
                              >
                                Ver Detalhes do Projeto
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                });
              })()}
            </div>
          </div>

          {/* Indicadores de posição */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
            {Array.from({ length: Math.ceil(portfolioLinks.length / visibleCards) }, (_, pageIndex) => {
              const isCurrentPage = carouselStartIndex >= pageIndex * visibleCards &&
                carouselStartIndex < (pageIndex + 1) * visibleCards;
              const pageId = `carousel-page-${pageIndex}`;
              return (
                <button
                  key={pageId}
                  onClick={() => {
                    const newStartIndex = pageIndex * visibleCards;
                    setCarouselStartIndex(newStartIndex);
                    // Não muda o card ativo, apenas move o carrossel
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${isCurrentPage
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                    }`}
                  aria-label={`Ir para página ${pageIndex + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio;
