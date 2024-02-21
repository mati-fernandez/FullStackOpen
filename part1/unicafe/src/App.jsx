import { useState } from 'react';

const Button = ({ handleclick, text }) => (
  <button onClick={handleclick}>{text}</button>
); //prettier hace el text wrap y por eso los paréntesis

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleclick={handleGood} text="Good"></Button>
      <Button handleclick={handleNeutral} text="Neutral"></Button>
      <Button handleclick={handleBad} text="Bad"></Button>
      <h2>Statistics</h2>
      <p>
        Good {good}
        <br />
        Neutral {neutral}
        <br />
        Bad {bad}
        <br />
        All {all}
        <br />
        Average {average}
        <br />
        Positive {positive}
      </p>
    </div>
  );
};

export default App;
