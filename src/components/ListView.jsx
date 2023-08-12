import PropTypes from "prop-types";
import FormatPrice from "../helpers/FormatPrice";
import { Link } from "react-router-dom";
import './css/ListView.css'
const ListView = ({ products }) => {
  return (
    <div className="list-view-cards">
      {products.map((product) => {
        return (
          <div className="list-view-card flex my-4 mx-2" key={product.id}>
            <div className="list-view-image center">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="list-view-details">
              <div className="product-name mb-4">
                <h3 className="text-xl">{product.name}</h3>
              </div>
              <div className="product-price">
               <p className="text-gray">MRP: <FormatPrice price={product.price} /> </p>
              </div>
              <div className="product-details">
                <p>{product.description}</p>
              </div>
              <div className="list-view-btn mt-2">
                <Link to={`/singleproduct/${product.id}`}>
                  <button>Know More</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ListView.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ListView;
