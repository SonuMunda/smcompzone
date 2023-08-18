import { useContext, createContext, useReducer, useEffect } from "react";
import useProductContext from "./ProductContext";
import reducer from "../reducers/filterReducer";
import PropTypes from "prop-types";

const FilterContext = createContext();
const initialState = {
  isProductsLoading: true,
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "price-ascending",
  filters: {
    searchText: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const getFilterdProducts = (products) => {
    if (!products) {
      dispatch({ type: "SET_FILTER_LOADING" });
    } else {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }
  };

  const sorting = (event) => {
    let userSortValue = event.target.value;
    dispatch({ type: "GET_SORT_PRODUCTS", payload: userSortValue });
  };

  //update filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    getFilterdProducts(products);
    console.log(products);
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
