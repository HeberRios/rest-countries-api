import { useContext } from 'react';
import { FilterContext } from '../context/filterContext';
import { CountryCardProps } from '../types/types';

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  const { filter, setFilter } = context;

  function filterCountries(countries: CountryCardProps[]) {
    const filteredCountries = countries.filter((country) => {
      return (
        filter.region === 'all' ||
        country.region.toLowerCase() === filter.region
      );
    });

    console.log(filteredCountries);

    return filteredCountries;
  }

  return {
    filter,
    setFilter,
    filterCountries,
  };
}
