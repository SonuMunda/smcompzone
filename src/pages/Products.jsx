import "./css/Products.css";
import FilterSection from "../components/FilterSection";
import SortingSection from "../components/SortingSection";
import ProductsSection from "../components/ProductsSection";

const Products = () => {
  return (
    <div className="wrapper">
      <section className="all-products center">
        <div className="container p-4">
          <div className="filter">
            <FilterSection />
          </div>
          <section className="sorting-products-view">
            <div className="sort">
              <SortingSection />
            </div>
            <div className="products">
              <ProductsSection />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Products;
