import { Link } from 'react-router';
import { CountryDetailsArticleProps } from '../types/types';
import codeAndCountryNameList from '../data-mockups/cca3-name-list.json';
import '../styles/CountryDetailsArticle.css';

export function CountryDetailsArticle({
  countryData,
}: CountryDetailsArticleProps) {
  return (
    <article className='country-details-container'>
      <header className='country-flag-image-container'>
        <img
          className='country-details-img'
          src={countryData.flags.svg}
          alt={countryData.flags.alt}
        />
      </header>

      <section className='country-details-text-container'>
        <div className='main-country-details-wrapper'>
          <h2>{countryData.name}</h2>
          <p>
            <strong>native name:</strong>
            {countryData.nativeName}
          </p>
          <p>
            <strong>population:</strong>
            {countryData.population.toLocaleString()}
          </p>
          <p>
            <strong>region:</strong>
            {countryData.region}
          </p>
          <p>
            <strong>sub region:</strong>
            {countryData.subRegion !== '' ? countryData.subRegion : 'N/A'}
          </p>
          <p>
            <strong>capital:</strong>
            {countryData.capital.length > 0 ? countryData.capital[0] : 'N/A'}
          </p>
        </div>

        <div className='secondary-country-details-wrapper'>
          <p>
            <strong>top level domain:</strong>
            {countryData.tld}
          </p>
          <p>
            <strong>currencies:</strong>
            {countryData.currencies}
          </p>
          <p>
            <strong>languages:</strong>
            {countryData.languages.length > 0
              ? countryData.languages.map((lang) => {
                  return (
                    <span key={lang} className='language-item'>
                      {lang}
                    </span>
                  );
                })
              : 'N/A'}
          </p>
        </div>

        <div className='borders-wrapper'>
          <strong>border countries:</strong>
          <div className='borders-names-wrapper'>
            {countryData.borders.length > 0
              ? countryData.borders.map((border) => {
                  return (
                    <Link
                      key={border}
                      to={`/${border}`}
                      className='border-country-link'
                    >
                      {
                        codeAndCountryNameList[
                          border as keyof typeof codeAndCountryNameList
                        ]
                      }
                    </Link>
                  );
                })
              : 'N/A'}
          </div>
        </div>
      </section>
    </article>
  );
}
