import { useState } from 'react';

export const Filter = ({ handleFilterChange }) => {
  const [filterByName, setFilterByName] = useState('');

  const handleInputChange = (event) => {
    setFilterByName(event.target.value);
    handleFilterChange(event.target.value);
  };

  return (
    <div>
      filter shown with{' '}
      <input value={filterByName} onChange={handleInputChange} />
    </div>
  );
};
