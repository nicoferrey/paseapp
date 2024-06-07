import React from 'react';

const ZoneFilter = ({ zones, setZones }) => {
  const handleCheckboxChange = (value) => {
    setZones(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
    <div>
      <h3>Zona de CABA</h3>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('zona1')} />
        Zona 1
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('zona2')} />
        Zona 2
      </label>
      {/* Añade más zonas según sea necesario */}
    </div>
  );
};

export default ZoneFilter;
