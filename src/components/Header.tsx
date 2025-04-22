import { useTheme } from '../hooks/useTheme';
import '../styles/Header.css';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

export function Header() {
  const { lightMode, setLightMode } = useTheme();

  function toggleLightMode() {
    setLightMode(!lightMode);
    document.body.classList.toggle('light-mode', !lightMode);
    window.localStorage.setItem('lightMode', String(!lightMode));
  }

  return (
    <header className='page-header'>
      <section className='container header-content'>
        <h1 className='main-heading'>Where in the world?</h1>
        <button
          onClick={toggleLightMode}
          id='theme-switch'
          className='theme-switch-btn'
        >
          {lightMode ? <MoonIcon /> : <SunIcon />}
        </button>
      </section>
    </header>
  );
}
