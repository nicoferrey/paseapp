import React from 'react';

const FrequencyFilter = ({ frequencies, setFrequencies }) => {
  const handleCheckboxChange = (value) => {
    setFrequencies(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
    <div>
      <h3>Frecuencia</h3>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('diaria')} />
        Diaria
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('semanal')} />
        Semanal
      </label>
      {/* Añade más frecuencias según sea necesario */}
    </div>
  );
};

export default FrequencyFilter;
