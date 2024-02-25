import { useState } from 'react';
import { Persons } from './components/Persons';
import { PersonForm } from './components/PersonForm';
import { Filter } from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [personsToShow, setPersonsToShow] = useState(persons);

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
