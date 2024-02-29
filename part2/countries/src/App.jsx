import { useState, useEffect } from 'react';
import countrieService from './services/countries';
import Countries from './components/Countries';
import './index.css';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    countrieService.getAll().then((formServerCountries) => {
      setCountries(formServerCountries);
    });
  }, []);

  return (
    <div>
      <Countries countries={countries} />
    </div>
  );
};

export default App;
