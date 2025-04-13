import { Link, useParams } from 'react-router';
import { Header } from '../components/Header';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { formatCountryDetailsData } from '../utils/utils';
import { CountryDetailsArticle } from '../components/CountryDetailsArticle';

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
      <main className='container details-page-content'>
        <Link to='/' className='country-details-home-page-link'>
          <ArrowLeftIcon />
          <span>back</span>
        </Link>

        <CountryDetailsArticle countryData={formattedCountryData} />
      </main>
    </div>
  );
}
