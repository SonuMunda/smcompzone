import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

const useProductContext = () => {
  return useContext(ProductsContext);
};

export default useProductContext;