import "./css/Products.css";
import FilterSection from "../components/FilterSection";
import SortingSection from "../components/SortingSection";
import ProductsSection from "../components/ProductsSection";
import { useFilterContext } from "../contexts/FilterContext";
import LoadingScreen from "../components/LoadingScreen";
const Products = () => {
  const { isProductsLoading } = useFilterContext();

  return (
    <div className="wrapper">
      <section className="all-products flex justify-center">
        <div className="container flex border">
          <div className="filter-menu">
            <FilterSection />
          </div>
          <section className="sorting-products-view flex flex-col border">
            <div className="sort-menu">
              <SortingSection />
            </div>
            <div className="products center">
              {isProductsLoading === true ? (
                <LoadingScreen />
              ) : (
                <ProductsSection />
              )}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Products;
