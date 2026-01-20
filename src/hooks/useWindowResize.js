import { useState, useEffect } from 'react';
import { getWindow } from '../utils/environment';


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
      
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      
      timeoutId = setTimeout(() => {
        setDimensions({
          width: win.innerWidth,
          height: win.innerHeight,
        });
      }, debounceMs);
    };

    
    win.addEventListener('resize', handleResize, { passive: true });

    
    return () => {
      win.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [debounceMs]);

  return dimensions;
};


export const useWindowWidth = (debounceMs = 150) => {
  const { width } = useWindowResize(debounceMs);
  return width;
};


export const useWindowHeight = (debounceMs = 150) => {
  const { height } = useWindowResize(debounceMs);
  return height;
};
