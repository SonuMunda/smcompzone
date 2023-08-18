import { useFilterContext } from "../contexts/FilterContext";

const FilterSection = () => {
  const {
    filters: { searchText },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newData = data.map((curData) => {
      return curData[property];
    });

    return (newData = ["all", ...new Set(newData)]);
  };

  const categories = getUniqueData(all_products, "category");
  const brands = getUniqueData(all_products, "brand");

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
        <div className="category-heading mt-6">
          <h4 className="font-bold text-xl">Category</h4>
        </div>
        <div className="categories flex flex-col ">
          {categories.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                onClick={updateFilterValue}
                value={curElem}
                className={`category-btn`}
              >
                {curElem}
              </button>
            );
          })}
        </div>
        <div className="brand-filters">
          <form>
            <select className="uppercase" id="brand-selector" name="brand"  onChange={updateFilterValue}>
              {brands.map((curElem, index) => {
                return (
                  <option
                    key={index}
                    value={curElem}
                  >
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
