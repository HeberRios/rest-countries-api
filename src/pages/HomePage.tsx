import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';
import { CountriesProvider } from '../context/countries';
import { FilterProvider } from '../context/filterContext';
import { useTheme } from '../hooks/useTheme';

export default function HomePage() {
  const { lightMode } = useTheme();

  return (
    <div
      className={lightMode === 'enabled' ? 'page-view light-mode' : 'page-view'}
    >
      <Header />

      <FilterProvider>
        <CountriesProvider>
          <MainContent />
        </CountriesProvider>
      </FilterProvider>
    </div>
  );
}
