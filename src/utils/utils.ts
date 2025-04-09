import { RawCountryCardData } from '../types/types';

export function formatCountryData(countriesData: RawCountryCardData[]) {
  return countriesData.map((country) => {
    return {
      cca3: country.cca3,
      name: country.name.official,
      capital: country.capital?.[0] || 'N/A',
      region: country.region,
      population: country.population,
      flagImg: country.flags.png,
      flagAlt: country.flags.alt || `${country.name.official} flag`,
    };
  });
}
