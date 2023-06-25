import React, { useState } from 'react';
import "./App.css";
import FetchMars from './components/FetchMars';
import Fetch from './components/Fetch';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='App'>
      <h1>{`Welcome to NASA {APIs}`}</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Seleccione una opción</option>
        <option value="apod">Foto astronómica del día 🪐</option>
        <option value="marsRovers">Mars Rovers 👽</option>
      </select>


      {selectedOption === 'apod' && <Fetch />}
      {selectedOption === 'marsRovers' && <FetchMars />}
    </div>
  );
};

export default App;