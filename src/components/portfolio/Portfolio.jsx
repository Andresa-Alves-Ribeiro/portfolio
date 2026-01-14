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

  // Quantidade de cards visíveis no carrossel (incluindo o ativo) - responsivo
  const [visibleCards, setVisibleCards] = useState(10);
  const cardsPerNavigation = 1; // Quantos cards avançar por navegação

  // Ajustar número de cards visíveis baseado no tamanho da tela
  useEffect(() => {
    const updateVisibleCards = () => {
      if (typeof globalThis.window === 'undefined') return;
      const width = globalThis.window.innerWidth;
      if (width < 640) {
        setVisibleCards(3); // Mobile: 3 cards
      } else if (width < 768) {
        setVisibleCards(5); // Tablet pequeno: 5 cards
      } else if (width < 1024) {
        setVisibleCards(7); // Tablet: 7 cards
      } else {
        setVisibleCards(10); // Desktop: 10 cards
      }
    };

    updateVisibleCards();
    if (typeof globalThis.window !== 'undefined') {
      globalThis.window.addEventListener('resize', updateVisibleCards);
      return () => globalThis.window.removeEventListener('resize', updateVisibleCards);
    }
  }, []);

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

  // Função auxiliar para calcular tamanho da fonte baseado na largura da tela
  const getFontSize = (isActive) => {
    if (isActive) {
      if (windowWidth < 640) return '1.5rem';
      if (windowWidth < 768) return '2rem';
      if (windowWidth < 1024) return '3rem';
      return '4rem';
    } else {
      if (windowWidth < 640) return '0.875rem';
      if (windowWidth < 768) return '1rem';
      return '1.5rem';
    }
  };

  // Valores responsivos para cards
  const getCardDimensions = () => {
    const width = typeof globalThis.window !== 'undefined' ? globalThis.window.innerWidth : 1024;
    if (width < 640) {
      return { inactive: 80, active: 280, height: 400 }; // Mobile
    } else if (width < 768) {
      return { inactive: 100, active: 350, height: 500 }; // Tablet pequeno
    } else if (width < 1024) {
      return { inactive: 120, active: 400, height: 550 }; // Tablet
    }
    return { inactive: 180, active: 500, height: 600 }; // Desktop
  };

  const [cardDimensions, setCardDimensions] = useState(getCardDimensions());
  const [windowWidth, setWindowWidth] = useState(typeof globalThis.window !== 'undefined' ? globalThis.window.innerWidth : 1024);

  useEffect(() => {
    const updateDimensions = () => {
      setCardDimensions(getCardDimensions());
      if (typeof globalThis.window !== 'undefined') {
        setWindowWidth(globalThis.window.innerWidth);
      }
    };

    updateDimensions();
    if (typeof globalThis.window !== 'undefined') {
      globalThis.window.addEventListener('resize', updateDimensions);
      return () => globalThis.window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  return (
    <>
      {/* Título da seção - fora do container que muda de cor */}
      <div className="text-center pt-4 pb-1 sm:pb-2 px-2 sm:px-4 md:px-8 relative z-20 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]" id='projects-title'>
        <div className="relative inline-block">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              Projects
            </span>
          </h1>

          {/* Linha decorativa */}
          <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3 md:mt-4">
            <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent via-pink-300/80 to-pink-400/80 rounded-full"></div>
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br from-rose-300 to-pink-300"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400"></div>
            </div>
            <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-gradient-to-l from-transparent via-rose-300/80 to-rose-400/80 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Container principal */}
      <div
        className='pt-0 pb-8 sm:pb-12 md:pb-16 px-2 sm:px-4 md:px-8 relative bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]'
        id='projects'
      >
        {/* Grid de fundo - mantendo o estilo futurista */}
        <div className="absolute inset-0 tech-grid opacity-10"></div>

        {/* Carrossel estilo CodePen */}
        <div ref={aboutRef} className="flex items-center justify-center px-4 py-6 sm:py-12 relative z-10">
          {/* Botão anterior */}
          {carouselStartIndex > 0 && (
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-1 sm:left-2 md:left-4 z-50 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full glass-effect hover:bg-pink-500/30 active:bg-pink-500/40 transition-all duration-300 flex items-center justify-center shadow-lg border border-pink-500/30"
              aria-label="Previous project"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Botão próximo */}
          {carouselStartIndex + visibleCards < portfolioLinks.length && (
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-1 sm:right-2 md:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full glass-effect hover:bg-pink-500/30 active:bg-pink-500/40 transition-all duration-300 flex items-center justify-center shadow-lg border border-pink-500/30"
              aria-label="Next project"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            className="mx-auto relative"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '100%',
              height: `${cardDimensions.height}px`,
              minHeight: `${cardDimensions.height}px`
            }}
          >
            <div className="relative w-full h-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {(() => {
                // Calcular larguras uma única vez para todos os cards (fora do map) - responsivo
                const inactiveWidth = cardDimensions.inactive;
                const activeWidth = cardDimensions.active;
                const containerWidth = Math.max(windowWidth * 0.95, (visibleCards - 1) * inactiveWidth + activeWidth);

                // Calcular largura atual do card ativo (isso muda durante a animação)
                const activeGlobalIndex = currentActiveIndex;
                const activeLocalIndex = activeGlobalIndex - carouselStartIndex;

                // Calcular largura atual do card ativo (será usado por todos os cards)
                const cardWidths = visibleCardsList.map((_, idx) => {
                  const cardGlobalIndex = carouselStartIndex + idx;
                  const cardIsActive = cardGlobalIndex === activeGlobalIndex;
                  return cardIsActive ? activeWidth : inactiveWidth;
                });

                return visibleCardsList.map((item, localIndex) => {
                  const globalIndex = carouselStartIndex + localIndex;
                  const isActive = currentActiveIndex === globalIndex;
                  const color = cardColors[globalIndex % cardColors.length];

                  // Apenas largura muda, altura permanece constante - responsivo
                  const width = isActive ? cardDimensions.active : cardDimensions.inactive;
                  const height = cardDimensions.height;

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
                      <div className="relative w-full h-full flex flex-col p-3 sm:p-4 md:p-6 lg:p-8">
                        {/* Ícone pequeno no topo esquerdo */}
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-20">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={`Icon ${item.title}`}
                                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-cover rounded-full"
                              />
                            )}
                          </div>
                        </div>

                        {/* Título */}
                        <div className={`flex items-center justify-center ${isActive ? 'mb-2 sm:mb-3 md:mb-4' : 'flex-1'}`} style={{ height: isActive ? 'auto' : '100%' }}>
                          <h2
                            className="font-bold transition-all duration-700"
                            style={{
                              color: color.text,
                              fontSize: getFontSize(isActive),
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
                              <div className="w-full max-w-full mb-2 sm:mb-3 md:mb-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                                <img
                                  src={item.image}
                                  alt={`Full project image ${item.title}`}
                                  className="w-full h-auto object-cover"
                                  loading="lazy"
                                />
                              </div>
                            )}

                            {/* Tags de tecnologias */}
                            <div className='flex justify-center items-center flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4'>
                              {item.stacks.slice(0, 3).map((stack) => (
                                <span
                                  key={stack}
                                  className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs md:text-sm font-semibold rounded-full"
                                >
                                  {stack}
                                </span>
                              ))}
                              {item.stacks.length > 3 && (
                                <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs md:text-sm font-semibold rounded-full">
                                  +{item.stacks.length - 3}
                                </span>
                              )}
                            </div>

                            {/* Botão para ir para a página do projeto */}
                            <div className="flex justify-center">
                              <Link
                                to={`/project/${item.title}`}
                                className="relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/30 backdrop-blur-sm text-white font-bold text-xs sm:text-sm md:text-base rounded-full hover:bg-white/40 active:bg-white/50 transition-all duration-300 inline-block hover:scale-105 active:scale-95 shadow-lg"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`View project details ${item.title}`}
                              >
                                View Details
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
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-50">
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
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    isCurrentPage
                      ? 'bg-white w-6 sm:w-8'
                      : 'bg-white/40 hover:bg-white/60 w-1.5 sm:w-2'
                  }`}
                  aria-label={`Go to page ${pageIndex + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  )
}

export default Portfolio;
