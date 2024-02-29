const Countries = (countries) => {
    const handleChange = (e) => {
      if (e.target.value )
  };
  countries.map((pais) => (
    <Countrie
      key={note.id}
      note={note}
      toggleImportance={() => toggleImportanceOf(note.id)}
    />
  ));
  return (
    <div>
      <h1>Countries</h1>
      Find countries: <input type="text" onChange={handleChange} />
      <ul>{countriesToShow}</ul>
    </div>
  );
};

export default Countries;
