import React from 'react';

const FrequencyFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      frequencies: prevFilters.frequencies.includes(value)
        ? prevFilters.frequencies.filter(v => v !== value)
        : [...prevFilters.frequencies, value]
    }));
  };

  return (
    <div className="frequency-filter">
      <h3 className="sidebar-title">Frecuencia</h3>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('diaria')}
          checked={filters.frequencies.includes('diaria')}
        />
        Diaria
      </label>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('semanal')}
          checked={filters.frequencies.includes('semanal')}
        />
        Semanal
      </label>
      {/* Añade más frecuencias según sea necesario */}
    </div>
  );
};

export default FrequencyFilter;
