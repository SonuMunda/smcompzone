import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const GridView = ({ products }) => {
  return (
    <div className="grid-view-cards center flex-wrap">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

GridView.propTypes = {
  products: PropTypes.array.isRequired,
};
export default GridView;
