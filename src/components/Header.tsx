import '../styles/Header.css';
import { SunIcon } from './icons/SunIcon';

export function Header() {
  return (
    <header className='page-header'>
      <section className='container header-content'>
        <h1 className='main-heading'>Where in the world?</h1>
        <button id='theme-switch' className='theme-switch-btn'>
          <SunIcon />
        </button>
      </section>
    </header>
  );
}
