import { BsGridFill } from "react-icons/bs";
import { BiListUl } from "react-icons/bi";
import { useFilterContext } from "../contexts/FilterContext";

const SortingSection = () => {
  const { grid_view, setGridView, setListView } = useFilterContext();

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
        <p className="text-gray">
          <i>{} products found</i>
        </p>
      </div>
      <div className="sort-by">
        <select name="sort-by-list" id="sort-by-list">
          <option value="acending">price [Low-High]</option>
          <option value="decending">price [high-low]</option>
        </select>
      </div>
    </div>
  );
};

export default SortingSection;
