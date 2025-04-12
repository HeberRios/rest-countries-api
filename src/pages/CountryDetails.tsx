import { Link, useParams } from 'react-router';
import { Header } from '../components/Header';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { Country } from '../types/types';
import codeAndCountryNameList from '../data-mockups/cca3-name-list.json';

function formatCountryDetailsData(country: Country) {
  const nativeNameLanguage = Object.keys(country.name.nativeName).slice(
    0,
    1
  )[0];

  const countryCurrency = Object.keys(country.currencies)[0];

  return {
    flags: country.flags,
    name: country.name?.official,
    nativeName: country.name.nativeName?.[nativeNameLanguage]?.common ?? 'N/A',
    population: country.population,
    region: country.region,
    subRegion: country.subregion,
    capital: country.capital,
    tld: country.tld[0],
    currencies: country.currencies?.[countryCurrency]?.name ?? 'N/A',
    languages: Object.values(country.languages),
    borders: country.borders,
  };
}

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
      <main className='container page-content'>
        <h3>{params.countryCode} details page</h3>
        <Link to='/' className='country-details-home-page-link'>
          <ArrowLeftIcon />
          <span>back</span>
        </Link>

        <article className='country-details-container'>
          <header className='country-flag-image-container'>
            <img
              src={formattedCountryData.flags.svg}
              alt={formattedCountryData.flags.alt}
            />
          </header>
          <h2>{formattedCountryData.name}</h2>
          <div className='main-country-details-wrapper'>
            <p>
              <strong>native name:</strong>
              {formattedCountryData.nativeName}
            </p>
            <p>
              <strong>population:</strong>
              {formattedCountryData.population}
            </p>
            <p>
              <strong>region:</strong>
              {formattedCountryData.region}
            </p>
            <p>
              <strong>sub region:</strong>
              {formattedCountryData.subRegion !== ''
                ? formattedCountryData.subRegion
                : 'N/A'}
            </p>
            <p>
              <strong>capital:</strong>
              {formattedCountryData.capital.length > 0
                ? formattedCountryData.capital[0]
                : 'N/A'}
            </p>
          </div>

          <div className='secondary-country-details-wrapper'>
            <p>
              <strong>top level domain:</strong>
              {formattedCountryData.tld}
            </p>
            <p>
              <strong>currencies:</strong>
              {formattedCountryData.currencies}
            </p>
            <p>
              <strong>languages:</strong>
              {formattedCountryData.languages.length > 0
                ? formattedCountryData.languages.map((lang) => {
                    return <span key={lang}>{lang}</span>;
                  })
                : 'N/A'}
            </p>
          </div>

          <div className='borders-wrapper'>
            <strong>Border Countries:</strong>
            <div className='borders-names-wrapper'>
              {formattedCountryData.borders.length > 0
                ? formattedCountryData.borders.map((border) => {
                    return (
                      <Link key={border} to={`/${border}`}>
                        {
                          codeAndCountryNameList[
                            border as keyof typeof codeAndCountryNameList
                          ]
                        }
                      </Link>
                    );
                  })
                : 'N/A'}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
