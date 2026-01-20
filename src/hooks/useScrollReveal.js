import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';


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

    const currentElement = elementRef.current;
    if (currentElement) {
      scrollRevealInstance.current = ScrollReveal();
      scrollRevealInstance.current.reveal(currentElement, defaultOptions);
    }

    return () => {
      if (scrollRevealInstance.current && currentElement) {
        scrollRevealInstance.current.clean(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};
