import '../styles/MainContent.css';
import { SearchAndFilter } from './SearchAndFilter';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { CountryCard } from './CountryCard';
import { formatCountryData } from '../utils/utils';

const formattedCountryData = formatCountryData(allCountriesData);

export function MainContent() {
  return (
    <main className='page-content'>
      <SearchAndFilter />
      <div className='countries-cards-container'>
        {formattedCountryData.map((country) => {
          return (
            <CountryCard
              key={country.name}
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
