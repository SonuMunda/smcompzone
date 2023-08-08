import PropTypes from "prop-types";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ToggleQuantity from "./ToggleQuantity";
import { Link } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { colors, stock } = product;
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(colors[0]);
  const increaseQuantity = () => {
    if (stock === true && quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="product-colors flex items-center">
        {colors ? (
          <>
            <p className="mr-2">Available Colors : </p>
            {colors.map((curColor, index) => (
              <button
                className={
                  color === curColor ? "color-btn btn-active" : "color-btn"
                }
                key={index}
                style={{ backgroundColor: curColor }}
                onClick={() => {
                  setColor(curColor);
                }}
              >
                {color === curColor ? <FaCheck /> : null}
              </button>
            ))}
          </>
        ) : null}
      </div>
      <ToggleQuantity
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <div className="add-product-btn my-3">
        <Link to={'/cart'}>
          <button className="btn">Add to cart</button>
        </Link>
      </div>
    </>
  );
};

AddToCart.propTypes = {
  product: PropTypes.object,
};

export default AddToCart;
