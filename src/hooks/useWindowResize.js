import { useState, useEffect } from 'react';
import { getWindow } from '../utils/environment';

/**
 * Hook customizado para gerenciar redimensionamento da janela com debounce
 * @param {number} debounceMs - Tempo de debounce em milissegundos (padrão: 150ms)
 * @returns {Object} Objeto com width e height da janela
 */
export const useWindowResize = (debounceMs = 150) => {
  const [dimensions, setDimensions] = useState(() => {
    const win = getWindow();
    return {
      width: win ? win.innerWidth : 1024,
      height: win ? win.innerHeight : 1080,
    };
  });

  useEffect(() => {
    const win = getWindow();
    if (!win) return;

    let timeoutId;

    const handleResize = () => {
      // Limpar timeout anterior
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Criar novo timeout para debounce
      timeoutId = setTimeout(() => {
        setDimensions({
          width: win.innerWidth,
          height: win.innerHeight,
        });
      }, debounceMs);
    };

    // Adicionar listener
    win.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      win.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [debounceMs]);

  return dimensions;
};

/**
 * Hook customizado para obter apenas a largura da janela com debounce
 * @param {number} debounceMs - Tempo de debounce em milissegundos (padrão: 150ms)
 * @returns {number} Largura da janela
 */
export const useWindowWidth = (debounceMs = 150) => {
  const { width } = useWindowResize(debounceMs);
  return width;
};

/**
 * Hook customizado para obter apenas a altura da janela com debounce
 * @param {number} debounceMs - Tempo de debounce em milissegundos (padrão: 150ms)
 * @returns {number} Altura da janela
 */
export const useWindowHeight = (debounceMs = 150) => {
  const { height } = useWindowResize(debounceMs);
  return height;
};
