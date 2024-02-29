import { useState, useEffect } from 'react';
import { Persons } from './components/Persons';
import { PersonForm } from './components/PersonForm';
import { Filter } from './components/Filter';
import servicePerson from './services/servicePerson';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    servicePerson.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setPersonsToShow(initialPersons);
      console.log('useEffect');
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const existingNames = personsToShow.map((person) =>
      person.name.toLowerCase()
    );
    const newNameLowerCase = newName.toLowerCase();

    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (existingNames.indexOf(newNameLowerCase) === -1) {
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
          (person) =>
            newName.toLocaleLowerCase() === person.name.toLocaleLowerCase()
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

  const handleChange = (e) => {
    e.target.name === 'name'
      ? setNewName(e.target.value)
      : setNewNumber(e.target.value);
  };

  const handleFilterChange = (event) => {
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setPersonsToShow(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow}
        setPersonsToShow={setPersonsToShow}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
