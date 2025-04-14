import '../styles/MainContent.css';
import { SearchAndFilter } from './SearchAndFilter';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { formatCountryData } from '../utils/utils';
import { CountriesList } from './CountriesList';

// endpoint for the countries data :
// https://restcountries.com/v3.1/all?fields=,cca3,name,capital,region,subregion,population,flags,tld,currencies,languages,borders

const formattedCountryData = formatCountryData(allCountriesData);

export function MainContent() {
  return (
    <main className='home-page-content'>
      <SearchAndFilter />

      <CountriesList countriesData={formattedCountryData} />
    </main>
  );
}
