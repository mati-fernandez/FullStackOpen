const Country = ({ country }) => {
  const languages = Object.entries(country.languages);
  console.log('Languages', languages);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Languages: </p>
      <ul>
        {languages.map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img className="flag" src={country.flags.svg} alt={country.flags.alt} />
    </div>
  );
};

export default Country;
