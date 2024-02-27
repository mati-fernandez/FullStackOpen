import { useState, useEffect } from 'react';
import axios from 'axios';
import { Persons } from './components/Persons';
import { PersonForm } from './components/PersonForm';
import { Filter } from './components/Filter';
import servicePerson from './services/servicePerson';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);

  useEffect(() => {
    servicePerson.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setPersonsToShow(initialPersons);
    });
  }, []);

  const handleFilterChange = (filterValue) => {
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setPersonsToShow(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        setPersonsToShow={setPersonsToShow}
        personsToShow={personsToShow}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
