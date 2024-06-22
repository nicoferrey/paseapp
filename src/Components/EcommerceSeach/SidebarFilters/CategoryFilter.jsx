import React from "react";

const CategoryFilter = ({ filters, setFilters }) => {
  const handleCheckboxChange = (value) => {
    const newCategories = filters.categories.includes(value)
      ? filters.categories.filter(v => v !== value)
      : [...filters.categories, value];
    setFilters('categories', newCategories);
  };

  return (
    <div className="category-filter">
      <h3>Categoría</h3>
      {['sneakers', 'flats', 'sandals', 'heels'].map(category => (
        <label key={category}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(category)}
            checked={filters.categories.includes(category)}
          />
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;


