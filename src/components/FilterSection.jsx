import { useFilterContext } from "../contexts/FilterContext";

const FilterSection = () => {
  const {filters:{searchText},updateFilterValue} = useFilterContext()
  return (
    <>
      <div className="product-search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="search"
            className="search-bar uppercase"
            name="searchText"
            value={searchText}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>
      <div className="category-filter">
        <div className="category-heading">
          <h6 className="font-bold">Category</h6>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
