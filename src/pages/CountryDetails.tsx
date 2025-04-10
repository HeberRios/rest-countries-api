import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';

export default function CountryDetails() {
  return (
    <div className='page-view'>
      <Header />
      <MainContent contentVariant='country-details' />
    </div>
  );
}
