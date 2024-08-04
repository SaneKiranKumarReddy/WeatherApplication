
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false); // state for errors.
  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const KEY = '43f5099d8cfb828bec708b4454684196';

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const showData = async () => {
    try {
      const response = await fetch(`${URL}${city}&appid=${KEY}&units=metric`);
      const jsonData = await response.json();
      let data = {
        city : city,
        feels_like: jsonData.main.feels_like,
        humidity: jsonData.main.humidity,
        temp: jsonData.main.temp,
        pressure: jsonData.main.pressure,
        temp_max: jsonData.main.temp_max,
        temp_min: jsonData.main.temp_min,
        wind_speed: jsonData.wind.speed,
        visibility: jsonData.visibility,
      };
      setError(false);
      updateInfo(data); // Update the info in the parent component
    } catch (err) {
      setError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity('');
    showData();
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <h2>Weather Application</h2>
        <TextField
          id="searchBox"
          label="City Name"
          variant="outlined"
          onChange={handleInputChange}
          value={city}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Search
        </Button>
        {error && <h5 style={{ color: 'red' }}>No such Place exists!</h5>}
      </form>
    </div>
  );
}
