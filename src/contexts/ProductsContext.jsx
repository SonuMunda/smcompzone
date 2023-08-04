import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
const ProductsContext = createContext();
import reducer from "../reducers/ProductReducer";

const API = `https://smcompzone-api.onrender.com/products`;
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //Single Product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data[0];
      dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductsContext, DataProvider };
