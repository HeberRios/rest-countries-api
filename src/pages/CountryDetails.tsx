import { Link, useParams } from 'react-router';
import { Header } from '../components/Header';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { formatCountryDetailsData } from '../utils/utils';
import { CountryDetailsArticle } from '../components/CountryDetailsArticle';
import '../styles/CountryDetails.css';

export default function CountryDetails() {
  const params = useParams();
  const countryCodeToDisplay = params.countryCode;

  const countryData = allCountriesData.find((country) => {
    return country.cca3 === countryCodeToDisplay;
  });

  const formattedCountryData = formatCountryDetailsData(countryData);

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

            <CountryDetailsArticle countryData={formattedCountryData} />
          </div>
        </div>
      </main>
    </div>
  );
}
