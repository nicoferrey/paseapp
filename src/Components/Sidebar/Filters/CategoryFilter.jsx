import React from 'react';

const CategoryFilter = ({ categories, setCategories }) => {
  const handleCheckboxChange = (value) => {
    setCategories(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
    <div>
      <h3>Categoría</h3>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('categoria1')} />
        Categoría 1
      </label>
      <label>
        <input type="checkbox" onChange={() => handleCheckboxChange('categoria2')} />
        Categoría 2
      </label>
      {/* Añade más categorías según sea necesario */}
    </div>
  );
};

export default CategoryFilter;
