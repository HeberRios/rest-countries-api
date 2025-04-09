export type RawCountryCardData = {
  cca3: string,
  name: { official: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { png: string; alt?: string };
};

export type CountryCardProps = {
  cca3: string
  name: string;
  capital: string;
  region: string;
  population: number;
  flagImg: string;
  flagAlt: string;
};
