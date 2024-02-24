import { useState } from 'react';
import { Person } from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

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

  // const personsToShow =

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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
