import {
  Country,
  CountryDetailsArticleType,
  RawCountryCardData,
} from '../types/types';

export function formatCountryData(countriesData: RawCountryCardData[]) {
  return countriesData.map((country) => {
    return {
      cca3: country.cca3,
      name: country.name.common,
      capital: country.capital?.[0] || 'N/A',
      region: country.region,
      population: country.population,
      flagImg: country.flags.png,
      flagAlt: country.flags.alt || `${country.name.common} flag`,
    };
  });
}

export function formatCountryDetailsData(
  country: Country
): CountryDetailsArticleType {
  const nativeNameLanguage = () => {
    if (country.name.nativeName) {
      return Object.keys(country.name.nativeName).slice(0, 1)[0];
    } else {
      return '';
    }
  };

  const countryCurrency = () => {
    if (country.currencies) {
      return Object.keys(country.currencies)[0];
    } else {
      return '';
    }
  };

  return {
    flags: country.flags ?? 'N/A',
    name: country.name?.official ?? 'N/A',
    nativeName:
      country.name.nativeName?.[nativeNameLanguage()]?.common ?? 'N/A',
    population: country.population ?? 'N/A',
    region: country.region ?? 'N/A',
    subRegion: country.subregion ?? 'N/A',
    capital: country.capital ?? [],
    tld: country.tld[0] ?? 'N/A',
    currencies: country.currencies?.[countryCurrency()]?.name ?? 'N/A',
    languages: Object.values(country.languages ?? {}),
    borders: country.borders ?? [],
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
