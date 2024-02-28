import { useState } from 'react';
import servicePerson from '../services/servicePerson';

export const PersonForm = ({
  persons,
  setPersons,
  personsToShow,
  setPersonsToShow,
}) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const existingNames = personsToShow.map((person) => person.name);
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (existingNames.indexOf(newName) === -1) {
      servicePerson.create(personObject).then((newPerson) => {
        setPersonsToShow(persons.concat(newPerson));
        setPersons(persons.concat(newPerson));
      });
    } else {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const personToUpdate = personsToShow.find(
          (person) => newName === person.name
        );
        const updatedPerson = { ...personToUpdate, number: newNumber };
        servicePerson
          .update(personToUpdate.id, updatedPerson)
          .then((updatedPerson) => {
            const newPersons = personsToShow.map((person) =>
              person.id !== updatedPerson.id ? person : updatedPerson
            );
            setPersonsToShow(newPersons);
            setPersons(newPersons);
          });
      }
    }
    setNewName('');
    setNewNumber('');
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
