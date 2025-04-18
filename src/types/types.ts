export type RawCountryCardData = {
  cca3: string;
  name: { common: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { png: string; alt?: string };
};

export type CountriesListProps = {
  countriesData: CountryCardProps[];
};

export type CountryCardProps = {
  cca3: string;
  name: string;
  capital: string;
  region: string;
  population: number;
  flagImg: string;
  flagAlt: string;
};

export type Country = {
  flags: Flags;
  name: Name;
  tld: string[];
  cca3: string;
  currencies: { [key: string]: Currency };
  capital: string[];
  region: Region;
  subregion: string;
  languages: { [key: string]: string };
  borders: string[];
  population: number;
};

export type Currency = {
  name: string;
  symbol: string;
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
};

export type NativeName = {
  official: string;
  common: string;
};

export type Region =
  | 'Antarctic'
  | 'Americas'
  | 'Europe'
  | 'Africa'
  | 'Asia'
  | 'Oceania';

export type CountryDetailsArticleProps = {
  countryData: CountryDetailsArticleType;
};

export type CountryDetailsArticleType = {
  flags: Flags;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  tld: string;
  currencies: string;
  languages: string[];
  borders: string[];
};

// filter context types

export type Filter = {
  query: string;
  region: string;
};

export type FilterContextType = {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

export type FilterProviderProps = {
  children: React.JSX.Element;
};

// countries context types

export type CountriesContextType = {
  countries: CountryCardProps[];
  setCountries: React.Dispatch<React.SetStateAction<CountryCardProps[]>>;
};

export type CountriesProviderProps = {
  children: React.JSX.Element;
};
