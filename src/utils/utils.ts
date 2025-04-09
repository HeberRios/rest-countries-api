import { rawCountryData } from '../types/types';

export function formatCountryData(countriesData: rawCountryData[]) {
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
