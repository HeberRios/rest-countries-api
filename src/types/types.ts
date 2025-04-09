export type rawCountryData = {
  name: { official: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { png: string; alt?: string };
};

export type CountryCardProps = {
  name: string;
  capital: string;
  region: string;
  population: number;
  flagImg: string;
  flagAlt: string;
};
