import "./Category.css";
import Input from "../../Input/Input";

function Category({ handleChange }) {
  return (
    <div>
      <div className="line-divider"></div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="adiestramiento"
          title="Adiestramiento"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="cuidado domestico"
          title="Cuidado domestico"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="paseo"
          title="Paseo"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;