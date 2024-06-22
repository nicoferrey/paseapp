import React from "react";
import CategoryFilter from "./Filters/CategoryFilter";
import DateRangeFilter from "./Filters/DateRangeFilter";
import FrequencyFilter from "./Filters/FrequencyFilter";
import PetTypeFilter from "./Filters/PetTypeFilter";
import RatingFilter from "./Filters/RatingFilter";
import ZoneFilter from "./Filters/ZoneFilter";
import "./Sidebar.css";

const Sidebar = ({ filters, setFilters }) => {
  return (
    <aside>
      <div className="sidebar">
        <CategoryFilter filters={filters} setFilters={setFilters} />
        <DateRangeFilter filters={filters} setFilters={setFilters} />
        <FrequencyFilter filters={filters} setFilters={setFilters} />
        <PetTypeFilter filters={filters} setFilters={setFilters} />
        <RatingFilter filters={filters} setFilters={setFilters} />
        <ZoneFilter filters={filters} setFilters={setFilters} />
      </div>
    </aside>
  );
};

export default Sidebar;
