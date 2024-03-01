import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import './index.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountriesToShow(filteredCountries);
  };

  return (
    <div>
      <br />
      <div>
        Find countries: <input onChange={handleChange} />
      </div>
      <Countries
        countriesToShow={countriesToShow}
        setCountriesToShow={setCountriesToShow}
      />
      <p>{loading ? 'Loading...' : null}</p>
    </div>
  );
};

export default App;
