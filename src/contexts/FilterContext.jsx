import { useContext, createContext, useReducer, useEffect } from "react";
import useProductContext from "./ProductContext";
import reducer from "../reducers/filterReducer";
import PropTypes from "prop-types";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state, setGridView }}>
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
