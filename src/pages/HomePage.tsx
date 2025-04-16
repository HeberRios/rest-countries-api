import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';
import { CountriesProvider } from '../context/countries';
import { FilterProvider } from '../context/filterContext';

export default function HomePage() {
  return (
    <div className='page-view'>
      <Header />
      <FilterProvider>
        <CountriesProvider>
          <MainContent />
        </CountriesProvider>
      </FilterProvider>
    </div>
  );
}
