import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";
import "./Sidebar.css";
import Filters from "./Filter";

const Sidebar = ({ handleChange }) => {
  const [filters, setFilters] = useState({});
  return (
    <aside>

    <div className="sidebar">
      <Filter filters={filters} setFilters={setFilters} />
    </div>
      
      <section className="sidebar">
      
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </aside>
  );
};

export default Sidebar;