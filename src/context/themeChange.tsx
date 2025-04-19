import { createContext, useEffect, useState } from 'react';
import { ThemeContextType, ThemeProviderProps } from '../types/types';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [lightMode, setLightMode] = useState<string | undefined>(undefined);

  function checkPreferredColorScheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'disabled';
    } else {
      return 'enabled';
    }
  }

  useEffect(() => {
    setLightMode(checkPreferredColorScheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
