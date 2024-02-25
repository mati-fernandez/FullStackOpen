import { useState } from 'react';

export const Filter = ({ persons, setPersonsToShow }) => {
  const [filterByName, setFilterByName] = useState('');

  const handleFilterChange = (e) => {
    setFilterByName(e.target.value.toLowerCase());
    setPersonsToShow(
      persons.filter((person) =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      filter shown with{' '}
      <input value={filterByName} onChange={handleFilterChange} />
    </div>
  );
};
