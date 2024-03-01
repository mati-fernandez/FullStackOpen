import Weather from './Weather';

const Country = ({ country }) => {
  const languages = Object.values(country.languages);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Languages: </p>
      <ul>
        {languages.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <img className="flag" src={country.flags.svg} alt={country.flags.alt} />
      <Weather capital={country.capital} />
    </div>
  );
};

export default Country;
