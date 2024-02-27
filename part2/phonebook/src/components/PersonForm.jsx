import { useState } from 'react';
import servicePerson from '../services/servicePerson';

export const PersonForm = ({ persons, personsToShow, setPersonsToShow }) => {
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

      servicePerson.create(personObject).then((newPerson) => {
        setPersonsToShow(personsToShow.concat(newPerson));
        setNewName('');
        setNewNumber('');
      });
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
      <p>
        name: <input value={newName} onChange={handleNameChange} />
      </p>
      <p>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </p>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
