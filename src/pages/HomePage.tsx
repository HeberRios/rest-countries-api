import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';
import { FilterProvider } from '../filterContext';

export default function HomePage() {
  return (
    <div className='page-view'>
      <Header />
      <FilterProvider>
        <MainContent />
      </FilterProvider>
    </div>
  );
}
