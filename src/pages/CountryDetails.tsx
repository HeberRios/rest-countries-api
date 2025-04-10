import { useParams } from 'react-router';
import { Header } from '../components/Header';

export default function CountryDetails() {
  const params = useParams();

  return (
    <div className='page-view'>
      <Header />
      <main className='container page-content'>
        <h3>{params.countryCode} details page</h3>
      </main>
    </div>
  );
}
