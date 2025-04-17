import { Country, RawCountryCardData } from '../types/types';

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

export function formatCountryDetailsData(country: Country) {
  const nativeNameLanguage = Object.keys(country.name.nativeName).slice(
    0,
    1
  )[0];

  const countryCurrency = Object.keys(country.currencies)[0];

  return {
    flags: country.flags,
    name: country.name?.official,
    nativeName: country.name.nativeName?.[nativeNameLanguage]?.common ?? 'N/A',
    population: country.population,
    region: country.region,
    subRegion: country.subregion,
    capital: country.capital,
    tld: country.tld[0],
    currencies: country.currencies?.[countryCurrency]?.name ?? 'N/A',
    languages: Object.values(country.languages),
    borders: country.borders,
  };
}

export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay = 300
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
