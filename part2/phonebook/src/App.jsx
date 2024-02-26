import { useState, useEffect } from 'react';
import axios from 'axios';
import { Persons } from './components/Persons';
import { PersonForm } from './components/PersonForm';
import { Filter } from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState(persons);

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersonsToShow(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setPersonsToShow={setPersonsToShow} />
      <h2>add a new</h2>
      <PersonForm
        personsToShow={personsToShow}
        setPersonsToShow={setPersonsToShow}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
