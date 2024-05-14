import FilterButton from "../Buttons/FilterButton";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <FilterButton onClickHandler={handleClick} value="" title="All Products" />
          <FilterButton onClickHandler={handleClick} value="Nike" title="Nike" />
          <FilterButton onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <FilterButton onClickHandler={handleClick} value="Puma" title="Puma" />
          <FilterButton onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;