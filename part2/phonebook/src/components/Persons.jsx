export const Persons = ({ personsToShow }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <div key={person.id}>
          Name {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};
