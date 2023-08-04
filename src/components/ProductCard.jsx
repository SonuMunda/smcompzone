import "./css/ProductCard.css";
import { Link } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
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
        <div className="card-datails around p-4">
          <h3 className="mr-4">{name}</h3>
          <FormatPrice price={price} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
