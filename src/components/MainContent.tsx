import '../styles/MainContent.css';
import { SearchAndFilter } from './SearchAndFilter';
import allCountriesData from '../data-mockups/data-v3_1.json';
import { formatCountryData } from '../utils/utils';
import { CountriesList } from './CountriesList';
import { useEffect, useState } from 'react';
import { CountryCardProps } from '../types/types';
import { useFilter } from '../useFilter';

// endpoint for the countries data :
// https://restcountries.com/v3.1/all?fields=,cca3,name,capital,region,subregion,population,flags,tld,currencies,languages,borders

export function MainContent() {
  const [countries, setCountriesData] = useState<CountryCardProps[]>([]);

  const { filter, filterCountries } = useFilter();

  useEffect(() => {
    const formattedCountryData = formatCountryData(allCountriesData);

    const filteredData = filterCountries(formattedCountryData);

    setCountriesData(filteredData);
  }, [filter]);

  return (
    <main className='home-page-content'>
      <SearchAndFilter />

      <CountriesList countriesData={countries} />
    </main>
  );
}
