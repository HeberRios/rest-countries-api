import { CountriesListProps } from '../types/types';
import { CountryCard } from './CountryCard';

export function CountriesList({ countriesData }: CountriesListProps) {
  return (
    <div className='countries-cards-section'>
      <div className='container countries-cards-container'>
        {countriesData.map((country) => {
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
    </div>
  );
}
