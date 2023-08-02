import "./css/ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = (product) => {
  const { id, image, name, price, category } = product;
  return (
    <Link to={`/singleproduct/${id}`} key={id} className="product-link m-2">
      <div className="product-card center">
        <div className="product-image center">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>
        </div>
        <div className="card-datails p-4">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
