import { useState } from 'react';

export const PersonForm = ({ personsToShow, setPersonsToShow }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const existingNames = personsToShow.map((person) => person.name);
    if (existingNames.indexOf(newName) === -1) {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      setPersonsToShow(personsToShow.concat(personObject));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
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
  );
};
