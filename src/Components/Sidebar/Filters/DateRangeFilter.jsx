import React from 'react';

const DateRangeFilter = ({ filters, setFilters }) => {
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      dateRange: {
        ...prevFilters.dateRange,
        [name]: value
      }
    }));
  };

  return (
    <div className="date-range-filter">
      <h3 className="sidebar-title">Duración</h3>
      <label className="sidebar-label-container">
        Desde: 
        <input
          type="date"
          name="start"
          value={filters.dateRange.start}
          onChange={handleDateChange}
        />
      </label>
      <label className="sidebar-label-container">
        Hasta: 
        <input
          type="date"
          name="end"
          value={filters.dateRange.end}
          onChange={handleDateChange}
        />
      </label>
    </div>
  );
};

export default DateRangeFilter;

