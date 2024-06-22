import React from 'react';

const RatingFilter = ({ filters, setFilters }) => {
  const handleRatingChange = (value) => {
    setFilters(prevFilters => ({ ...prevFilters, rating: value }));
  };

  return (
    <div className="rating-filter">
      <h3 className="sidebar-title">Puntuación Mínima</h3>
      {[1, 2, 3, 4, 5].map(star => (
        <label key={star} className="sidebar-label-container">
          <input
            type="radio"
            name="rating"
            value={star}
            onChange={() => handleRatingChange(star)}
            checked={filters.rating === star}
          />
          {star} Estrellas
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;
