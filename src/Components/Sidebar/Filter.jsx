import React from 'react';
import CategoryFilter from './Filters/CategoryFilter';
import PetTypeFilter from './Filters/PetTypeFilter';
import FrequencyFilter from './Filters/FrequencyFilter';
import DateRangeFilter from './Filters/DateRangeFilter';
import RatingFilter from './Filters/RatingFilter';
import ZoneFilter from './Filters/ZoneFilter';

const Filter = ({ filters, setFilters }) => {
  const setCategories = (categories) => setFilters(prev => ({ ...prev, categories }));
  const setPetTypes = (petTypes) => setFilters(prev => ({ ...prev, petTypes }));
  const setFrequencies = (frequencies) => setFilters(prev => ({ ...prev, frequencies }));
  const setDateRange = (dateRange) => setFilters(prev => ({ ...prev, dateRange }));
  const setRating = (rating) => setFilters(prev => ({ ...prev, rating }));
  const setZones = (zones) => setFilters(prev => ({ ...prev, zones }));

  return (
    <div>
      <h2>Filtros</h2>
      <CategoryFilter categories={filters.categories} setCategories={setCategories} />
      <PetTypeFilter petTypes={filters.petTypes} setPetTypes={setPetTypes} />
      <FrequencyFilter frequencies={filters.frequencies} setFrequencies={setFrequencies} />
      <DateRangeFilter dateRange={filters.dateRange} setDateRange={setDateRange} />
      <RatingFilter rating={filters.rating} setRating={setRating} />
      <ZoneFilter zones={filters.zones} setZones={setZones} />
      <button onClick={() => setFilters(filters)}>Aplicar Filtros</button>
    </div>
  );
};

export default Filter;
