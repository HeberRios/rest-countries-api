import { useCallback, useContext } from 'react';
import { FilterContext } from '../context/filterContext';
import { CountryCardProps } from '../types/types';

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  const { filter, setFilter } = context;

  const filterCountries = useCallback(
    (countries: CountryCardProps[]) => {
      return countries.filter((country) => {
        if (filter.query === '') {
          return (
            filter.region === 'all' ||
            country.region.toLowerCase() === filter.region
          );
        } else {
          return (
            country.name.toLowerCase().includes(filter.query.toLowerCase()) &&
            (filter.region === 'all' ||
              country.region.toLowerCase() === filter.region)
          );
        }
      });
    },
    [filter]
  );

  return {
    filter,
    setFilter,
    filterCountries,
  };
}
