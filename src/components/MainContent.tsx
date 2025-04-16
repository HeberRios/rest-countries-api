import '../styles/MainContent.css';
import { SearchAndFilter } from './SearchAndFilter';
import { CountriesList } from './CountriesList';
import { useFilter } from '../hooks/useFilter';
import { useCountries } from '../hooks/useCountries';

// endpoint for the countries data :
// https://restcountries.com/v3.1/all?fields=,cca3,name,capital,region,subregion,population,flags,tld,currencies,languages,borders

export function MainContent() {
  const { countries } = useCountries();

  const { filterCountries } = useFilter();

  const filteredCountries = filterCountries(countries);

  return (
    <main className='home-page-content'>
      <SearchAndFilter />

      <CountriesList countriesData={filteredCountries} />
    </main>
  );
}
