const Search = ({ countries, setCountriesToShow }) => {
  const handleChange = (e) => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountriesToShow(filteredCountries);
  };

  return (
    <div>
      Find countries: <input onChange={handleChange} />
    </div>
  );
};

export default Search;
