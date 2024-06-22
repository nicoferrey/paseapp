import React from 'react';

const PetTypeFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      petTypes: prevFilters.petTypes.includes(value)
        ? prevFilters.petTypes.filter(v => v !== value)
        : [...prevFilters.petTypes, value]
    }));
  };

  return (
    <div className="pet-type-filter">
      <h3 className="sidebar-title">Tipo de Mascota</h3>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('gato')}
          checked={filters.petTypes.includes('gato')}
        />
        Gato
      </label>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('perro')}
          checked={filters.petTypes.includes('perro')}
        />
        Perro
      </label>
      {/* Añade más tipos de mascota según sea necesario */}
    </div>
  );
};

export default PetTypeFilter;
