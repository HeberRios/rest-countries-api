//create the context

import { createContext, useEffect, useState } from 'react';
import {
  CountriesContextType,
  CountriesProviderProps,
  CountryCardProps,
} from '../types/types';

import allCountriesData from '../data-mockups/data-v3_1.json';
import { formatCountryData } from '../utils/utils';

export const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined
);

// provider
export function CountriesProvider({ children }: CountriesProviderProps) {
  const [countries, setCountries] = useState<CountryCardProps[]>([]);

  useEffect(() => {
    const formattedCountryData = formatCountryData(allCountriesData);
    setCountries(formattedCountryData);
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
}
