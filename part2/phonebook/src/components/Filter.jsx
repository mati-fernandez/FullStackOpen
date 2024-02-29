import { useState } from 'react';

export const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      filter shown with <input onChange={handleFilterChange} />
    </div>
  );
};
