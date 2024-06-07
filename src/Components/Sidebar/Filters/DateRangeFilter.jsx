import React from 'react';

const DateRangeFilter = ({ dateRange, setDateRange }) => {
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>Duración</h3>
      <label>
        Desde: <input type="date" name="start" onChange={handleDateChange} />
      </label>
      <label>
        Hasta: <input type="date" name="end" onChange={handleDateChange} />
      </label>
    </div>
  );
};

export default DateRangeFilter;
