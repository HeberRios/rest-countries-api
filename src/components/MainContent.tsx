import '../styles/MainContent.css';
import { SearchAndFilter } from './SearchAndFilter';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { CountryCard } from './CountryCard';
import { formatCountryData } from '../utils/utils';

// endpoint for the countries data :
// https://restcountries.com/v3.1/all?fields=,cca3,name,capital,region,subregion,population,flags,tld,currencies,languages,borders

const formattedCountryData = formatCountryData(allCountriesData);

export function MainContent() {
  return (
    <main className='container home-page-content'>
      <SearchAndFilter />
      <div className='countries-cards-container'>
        {formattedCountryData.map((country) => {
          return (
            <CountryCard
              key={country.cca3}
              cca3={country.cca3}
              name={country.name}
              capital={country.capital}
              region={country.region}
              population={country.population}
              flagImg={country.flagImg}
              flagAlt={country.flagAlt}
            />
          );
        })}
      </div>
    </main>
  );
}
