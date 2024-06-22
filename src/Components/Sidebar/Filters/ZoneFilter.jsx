import React from 'react';

const ZoneFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      zones: prevFilters.zones.includes(value)
        ? prevFilters.zones.filter(v => v !== value)
        : [...prevFilters.zones, value]
    }));
  };

  return (
    <div className="zone-filter">
      <h3 className="sidebar-title">Zona de CABA</h3>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('zona1')}
          checked={filters.zones.includes('zona1')}
        />
        Zona 1
      </label>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('zona2')}
          checked={filters.zones.includes('zona2')}
        />
        Zona 2
      </label>
      {/* Añade más zonas según sea necesario */}
    </div>
  );
};

export default ZoneFilter;
