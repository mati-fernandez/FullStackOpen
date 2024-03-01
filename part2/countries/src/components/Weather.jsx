import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  console.log(weather);

  if (weather.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Weather in {capital}</p>
      <p>Temperature: {weather.main.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
};

export default Weather;
