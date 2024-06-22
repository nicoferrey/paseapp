import React from 'react';

const CategoryFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      categories: prevFilters.categories.includes(value)
        ? prevFilters.categories.filter(v => v !== value)
        : [...prevFilters.categories, value]
    }));
  };

  return (
    <div className="category-filter">
      <h3 className="sidebar-title">Categoría</h3>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('sneakers')}
          checked={filters.categories.includes('sneakers')}
        />
        Sneakers
      </label>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('flats')}
          checked={filters.categories.includes('flats')}
        />
        Flats
      </label>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('sandals')}
          checked={filters.categories.includes('sandals')}
        />
        Sandals
      </label>
      <label className="sidebar-label-container">
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('heels')}
          checked={filters.categories.includes('heels')}
        />
        Heels
      </label>
    </div>
  );
};

export default CategoryFilter;

