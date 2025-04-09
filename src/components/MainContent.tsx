import '../styles/MainContent.css';
import { SearchAndFilter } from './SearchAndFilter';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { CountryCard } from './CountryCard';

type rawCountryData = {
  name: { official: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { png: string; alt?: string };
};

function formatCountryData(countriesData: rawCountryData[]) {
  return countriesData.map((country) => {
    return {
      name: country.name.official,
      capital: country.capital?.[0] || 'N/A',
      region: country.region,
      population: country.population,
      flagImg: country.flags.png,
      flagAlt: country.flags.alt || `${country.name.official} flag`,
    };
  });
}

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
