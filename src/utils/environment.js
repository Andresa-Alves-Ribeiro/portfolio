/**
 * Utilitários para verificação de ambiente e compatibilidade
 */

/**
 * Verifica se está rodando no navegador (client-side)
 * @returns {boolean} True se estiver no navegador
 */
export const isBrowser = () => {
  return typeof window !== 'undefined' || typeof globalThis.window !== 'undefined';
};

/**
 * Obtém o objeto window de forma segura
 * @returns {Window|undefined} Objeto window ou undefined
 */
export const getWindow = () => {
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof globalThis !== 'undefined' && globalThis.window) {
    return globalThis.window;
  }
  return undefined;
};

/**
 * Obtém a largura da janela de forma segura
 * @param {number} fallback - Valor padrão se não conseguir obter
 * @returns {number} Largura da janela ou fallback
 */
export const getWindowWidth = (fallback = 1024) => {
  const win = getWindow();
  return win ? win.innerWidth : fallback;
};

/**
 * Obtém a altura da janela de forma segura
 * @param {number} fallback - Valor padrão se não conseguir obter
 * @returns {number} Altura da janela ou fallback
 */
export const getWindowHeight = (fallback = 1080) => {
  const win = getWindow();
  return win ? win.innerHeight : fallback;
};

/**
 * Obtém o valor de scrollY de forma segura
 * @param {number} fallback - Valor padrão se não conseguir obter
 * @returns {number} Scroll Y ou fallback
 */
export const getScrollY = (fallback = 0) => {
  const win = getWindow();
  return win ? (win.scrollY || win.pageYOffset || 0) : fallback;
};
