import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

/**
 * Hook customizado para aplicar animação ScrollReveal a um elemento
 * @param {Object} options - Opções de configuração do ScrollReveal
 * @param {number} options.duration - Duração da animação (padrão: 1000ms)
 * @param {number} options.delay - Delay da animação (padrão: 500ms)
 * @param {string} options.easing - Tipo de easing (padrão: 'ease-in-out')
 * @param {string} options.distance - Distância da animação (padrão: '20px')
 * @param {string} options.origin - Origem da animação (padrão: 'bottom')
 * @param {number} options.opacity - Opacidade inicial (padrão: 0)
 * @returns {Object} Ref para anexar ao elemento
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const scrollRevealInstance = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      duration: 1000,
      delay: 500,
      easing: 'ease-in-out',
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
      ...options,
    };

    if (elementRef.current) {
      scrollRevealInstance.current = ScrollReveal();
      scrollRevealInstance.current.reveal(elementRef.current, defaultOptions);
    }

    return () => {
      if (scrollRevealInstance.current && elementRef.current) {
        scrollRevealInstance.current.clean(elementRef.current);
      }
    };
  }, [options]);

  return elementRef;
};
