import useProductContext from "../contexts/ProductContext";
import LoadingScreen from "./LoadingScreen";
import ProductCard from "./ProductCard";
const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();
  return (
    <section className="featured-products center gray-tint py-5">
      <div className="container p-5">
        <div className="intro-text mt-5">
          <h4 className="text-gray uppercase">Check Now</h4>
        </div>
        <div className="featured-heading mb-5">
          <h3 className="heading">Featured Products</h3>
        </div>
        <div className="featured-prod-cards center flex-wrap py-2">
          {isLoading ? (
            <LoadingScreen />
          ) : (
            featuredProducts.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
