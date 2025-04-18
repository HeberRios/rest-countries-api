export async function getAllCountriesData(endpoint: string) {
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

export async function getCountryDetails(cca3Code: string | undefined) {
  const countryDataEndpoint = `https://restcountries.com/v3.1/alpha/${cca3Code}`;

  const response = await fetch(countryDataEndpoint);
  const data = await response.json();

  return data[0];
}
