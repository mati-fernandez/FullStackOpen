export const PersonForm = ({ newName, newNumber, handleChange, addName }) => {
  return (
    <form onSubmit={addName}>
      <p>
        name: <input name={'name'} value={newName} onChange={handleChange} />
      </p>
      <p>
        number:{' '}
        <input name={'number'} value={newNumber} onChange={handleChange} />
      </p>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
