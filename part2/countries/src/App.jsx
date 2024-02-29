import { useState, useEffect } from 'react';
import countrieService from './services/countries';
import Search from './components/Filter';
import Countries from './components/Countries';
import './index.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  console.log('countries', countries);
  useEffect(() => {
    console.log('useEffect');
    countrieService.getAll().then((formServerCountries) => {
      setCountries(formServerCountries);
    });
  }, []);
  console.log('Countries to show', countriesToShow);

  return (
    <div>
      <br />
      <Search countries={countries} setCountriesToShow={setCountriesToShow} />
      <Countries countriesToShow={countriesToShow} />
    </div>
  );
};

export default App;
