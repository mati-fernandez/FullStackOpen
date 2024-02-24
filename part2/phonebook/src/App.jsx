import { useState } from 'react';
import { Person } from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterByName, setFilterByName] = useState();

  const addName = (event) => {
    event.preventDefault();
    const existingNames = persons.map((person) => person.name);
    if (existingNames.indexOf(newName) === -1) {
      const personObject = {
        name: newName,
      };

      setPersons(persons.concat(personObject));
      setNewName('');
    } else {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  // const personsToShow =

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} />
      ))}
    </div>
  );
};

export default App;
