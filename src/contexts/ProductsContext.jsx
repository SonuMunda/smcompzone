import { createContext, useContext } from "react";
import { PropTypes } from "prop-types";
const ProductsContext = createContext();

const DataProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ name: "klwedad" }}>
      {children}
    </ProductsContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(ProductsContext);
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductsContext, DataProvider, useProductContext };
