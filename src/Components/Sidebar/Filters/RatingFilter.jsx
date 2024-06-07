import React from 'react';

const RatingFilter = ({ rating, setRating }) => {
  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h3>Puntuación Mínima</h3>
      {[1, 2, 3, 4, 5].map(star => (
        <label key={star}>
          <input type="radio" name="rating" value={star} onChange={() => handleRatingChange(star)} />
          {star} Estrellas
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;
