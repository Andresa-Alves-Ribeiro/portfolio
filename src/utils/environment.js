


export const isBrowser = () => {
  return typeof window !== 'undefined' || typeof globalThis.window !== 'undefined';
};


export const getWindow = () => {
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof globalThis !== 'undefined' && globalThis.window) {
    return globalThis.window;
  }
  return undefined;
};


export const getWindowWidth = (fallback = 1024) => {
  const win = getWindow();
  return win ? win.innerWidth : fallback;
};


export const getWindowHeight = (fallback = 1080) => {
  const win = getWindow();
  return win ? win.innerHeight : fallback;
};


export const getScrollY = (fallback = 0) => {
  const win = getWindow();
  return win ? (win.scrollY || win.pageYOffset || 0) : fallback;
};
