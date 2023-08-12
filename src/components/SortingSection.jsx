import { BsGridFill } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { useFilterContext } from "../contexts/FilterContext";

const SortingSection = () => {
  const { filter_products, grid_view, setGridView, setListView,sorting } =
    useFilterContext();

  return (
    <div className="sorting-menu-row between" style={{ width: "100%" }}>
      <div className="sorting-btns center">
        <button
          className={`sorting-btn ${
            grid_view === true ? "sorting-btn-active" : ""
          }`}
          onClick={setGridView}
        >
          <BsGridFill />
        </button>
        <button
          className={`sorting-btn ${
            grid_view === false ? "sorting-btn-active" : ""
          }`}
          onClick={setListView}
        >
          <BiListUl />
        </button>
      </div>
      <div className="total-products">
        <p className="text-gray-400">{filter_products.length} products found</p>
      </div>
      <div className="sort-by">
        <select name="sort-by-list" id="sort-by-list" onClick={sorting}>
          <option value="price-ascending">Price(Low-High)</option>
          <option value="price-descending">Price(high-low)</option>
          <option value="product-ascending">Product(A-Z)</option>
          <option value="product-descending">Product(Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default SortingSection;
