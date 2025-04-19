import { useContext } from 'react';
import { ThemeContext } from '../context/themeChange';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  const { lightMode, setLightMode } = context;

  return {
    lightMode,
    setLightMode,
  };
}
