import Country from './Country';

const Countries = ({ countriesToShow }) => {
  if (countriesToShow.length === 0) {
    return <div>Type some country name! 🙂</div>;
  } else if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countriesToShow.length === 1) {
    const country = countriesToShow[0];
    return (
      <div>
        <Country key={country.name.common} country={country} />
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <ul>
          {countriesToShow.map((country) => (
            <div key={country.name.common}>{country.name.common}</div>
          ))}
        </ul>
      </div>
    );
  }
};

export default Countries;
