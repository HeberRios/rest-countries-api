//create the context

import { createContext, useEffect, useState } from 'react';
import {
  CountriesContextType,
  CountriesProviderProps,
  CountryCardProps,
} from '../types/types';

import { formatCountryData } from '../utils/utils';
import { getAllCountriesData } from '../services/countriesData';
import { allCountriesDataEndpoint } from '../utils/consts';

export const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

// provider
export function CountriesProvider({ children }: CountriesProviderProps) {
  const [countries, setCountries] = useState<CountryCardProps[]>([]);

  useEffect(() => {
    async function fetchCountriesData() {
      try {
        const rawData = await getAllCountriesData(allCountriesDataEndpoint);
        const formattedCountryData = formatCountryData(rawData);
        setCountries(formattedCountryData);
      } catch (error) {
        throw new Error(`Error fetching the countries:  ${error}`);
      }
    }

    fetchCountriesData();
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
}
