export const Persons = ({ personsToShow }) => {
  //   console.log(personsToShow);
  return (
    <div>
      {personsToShow.map((person) => (
        <div key={person.id}>
          Name {person.name} {person.number} id {person.id}
        </div>
      ))}
    </div>
  );
};
