import { Link, useParams } from 'react-router';
import { Header } from '../components/Header';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { formatCountryDetailsData } from '../utils/utils';
import { CountryDetailsArticle } from '../components/CountryDetailsArticle';
import '../styles/CountryDetails.css';
import { getCountryDetails } from '../services/countriesData';
import { useEffect, useState } from 'react';
import { CountryDetailsArticleType } from '../types/types';
import { LoadingStateIcon } from '../components/icons/LoadingStateIcon';

export default function CountryDetails() {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState<
    CountryDetailsArticleType | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCountry() {
      try {
        setLoading(true);
        const data = await getCountryDetails(countryCode);
        const formattedData = formatCountryDetailsData(data);
        setCountryData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error(`Failed to fetch country details: ${error}`);
        setError(true);
        setLoading(false);
      }
    }

    if (countryCode) {
      fetchCountry();
    }
  }, [countryCode]);

  return (
    <div className='page-view'>
      <Header />
      <main className='details-page-content'>
        <div className='details-page-section'>
          <div className='container'>
            <Link to='/' className='country-details-home-page-link'>
              <ArrowLeftIcon />
              <span>back</span>
            </Link>

            {(loading && (
              <div className='loading-icon-container'>
                <LoadingStateIcon />
              </div>
            )) ||
              (error && <p>Something went wrong. Please try again later.</p>) ||
              (countryData && (
                <CountryDetailsArticle countryData={countryData} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
