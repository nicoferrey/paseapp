import React from 'react';

const PetTypeFilter = ({ petTypes, setPetTypes }) => {
  const handleCheckboxChange = (value) => {
    setPetTypes(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
    <div>
      <h3>Tipo de Mascota</h3>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('gato')} />
        Gato
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('perro')} />
        Perro
      </label>
      {/* Añade más tipos de mascota según sea necesario */}
    </div>
  );
};

export default PetTypeFilter;
