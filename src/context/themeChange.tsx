import { createContext, useEffect, useState } from 'react';
import { ThemeContextType, ThemeProviderProps } from '../types/types';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [lightMode, setLightMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    function prefersLightMode() {
      const savedTheme = window.localStorage.getItem('lightMode');

      if (savedTheme) {
        return savedTheme === 'true';
      }

      return window.matchMedia('(prefers-color-scheme: light)').matches;
    }

    function setPreferredColorScheme() {
      if (prefersLightMode()) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }
    setPreferredColorScheme();
    setLightMode(prefersLightMode());
  }, []);

  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
