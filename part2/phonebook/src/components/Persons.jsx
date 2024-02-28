import servicePerson from '../services/servicePerson';

export const Persons = ({ personsToShow, setPersonsToShow, setPersons }) => {
  const handleDelete = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      servicePerson.remove(id).then(() => {
        const newPersons = personsToShow.filter((person) => person.id !== id);
        setPersonsToShow(newPersons);
        setPersons(newPersons);
      });
    }
  };
  return (
    <div>
      {personsToShow.map((person) => (
        <p key={person.id}>
          Name {person.name} {person.number}&nbsp;&nbsp;
          <button onClick={() => handleDelete(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};
