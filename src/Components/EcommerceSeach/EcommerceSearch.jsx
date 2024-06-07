import { useState } from "react";

import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import products from "../../db/data";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";
import Filter from "../Sidebar/Filter";
//import "./index.css";

function EcommerceSearch() {
  const [filters, setFilters] = useState({
    categories: [],
    petTypes: [],
    frequencies: [],
    dateRange: { start: '', end: '' },
    rating: 0,
    zones: []
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
      
      return categoryMatch && petTypeMatch && frequencyMatch && dateRangeMatch && ratingMatch && zoneMatch;
    });
  };

  // DE ACA OARA ABAJO NO USO
  const filteredProducts = applyFilters(products, filters);

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return (
      filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
        )
      )

    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default EcommerceSearch;