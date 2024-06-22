import { useState } from "react";
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "../../db/data";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import "./EcommerceSearch.css";

function EcommerceSearch() {
  const [filters, setFilters] = useState({
    categories: [],
    petTypes: [],
    frequencies: [],
    dateRange: { start: '', end: '' },
    rating: 0,
    zones: [],
    prices: []
  });

  const applyFilters = (products, filters) => {
    return products.filter(product => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
      const petTypeMatch = filters.petTypes.length === 0 || filters.petTypes.includes(product.petType);
      const frequencyMatch = filters.frequencies.length === 0 || filters.frequencies.includes(product.frequency);
      const dateRangeMatch = (!filters.dateRange.start || new Date(product.date) >= new Date(filters.dateRange.start)) &&
                             (!filters.dateRange.end || new Date(product.date) <= new Date(filters.dateRange.end));
      const ratingMatch = product.rating >= filters.rating;
      const zoneMatch = filters.zones.length === 0 || filters.zones.includes(product.zone);
      const priceMatch = filters.prices.length === 0 || filters.prices.includes(product.price);

      return categoryMatch && petTypeMatch && frequencyMatch && dateRangeMatch && ratingMatch && zoneMatch && priceMatch;
    });
  };

  const filteredProducts = applyFilters(products, filters);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="ecommerce-search">
      <Sidebar filters={filters} setFilters={handleFilterChange} />
      <div className="main-content">
        <Navigation query={filters.query} handleInputChange={(e) => handleFilterChange({ query: e.target.value })} />
        <Recommended handleClick={handleFilterChange} />
        <Products products={filteredProducts} />
      </div>
    </div>
  );
}

export default EcommerceSearch;
