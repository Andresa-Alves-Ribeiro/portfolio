import { useState, useEffect } from 'react';


export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }

      const prefersDark =
        globalThis.window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
      if (prefersDark !== undefined) {
        return prefersDark;
      }

      return false;
    } catch (error) {
      console.warn('Erro ao acessar localStorage ou matchMedia:', error);
      return false;
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    } catch (error) {
      console.warn('Erro ao salvar tema no localStorage:', error);
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark-mode');
      } else {
        root.classList.remove('dark-mode');
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return { isDarkMode, toggleTheme };
}; 