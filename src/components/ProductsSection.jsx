import { useFilterContext } from "../contexts/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import LoadingScreen from "./LoadingScreen";

const ProductsSection = () => {
  const { filter_products, grid_view, isProductsLoading } = useFilterContext();
  if (isProductsLoading === true) {
    return <LoadingScreen />;
  }
  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductsSection;
