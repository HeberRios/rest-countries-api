export type RawCountryCardData = {
  cca3: string;
  name: { official: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { png: string; alt?: string };
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
  countryData: CountryDetailsArticle;
};

export type CountryDetailsArticle = {
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
