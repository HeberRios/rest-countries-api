import '../styles/CountryCard.css';

export type CountryCardProps = {
  name: string;
  capital: string;
  region: string;
  population: number;
  flagImg: string;
  flagAlt: string;
};

export function CountryCard({
  name,
  capital,
  region,
  population,
  flagImg,
  flagAlt,
}: CountryCardProps) {
  return (
    <article className='country-card'>
      <header>
        <img src={flagImg} alt={flagAlt} />
      </header>
      <section className='country-card-text-container'>
        <h2>{name}</h2>
        <p>
          <strong>population:</strong>
          {population.toLocaleString()}
        </p>
        <p>
          <strong>region:</strong>
          {region}
        </p>
        <p>
          <strong>capital:</strong>
          {capital}
        </p>
      </section>
    </article>
  );
}
