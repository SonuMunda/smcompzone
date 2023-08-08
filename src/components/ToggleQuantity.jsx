import { FaPlus, FaMinus } from "react-icons/fa";
import PropTypes from "prop-types";
const ToggleQuantity = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="quantity-selector flex items-center p-1">
      <button className="quantity-btn p-2" onClick={decreaseQuantity}>
        <FaMinus />
      </button>
      <div className="quantity center">
        <p className="quantity-amount mx-1 font-bold block">{quantity}</p>
      </div>
      <button className="quantity-btn p-2" onClick={increaseQuantity}>
        <FaPlus />
      </button>
    </div>
  );
};

ToggleQuantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};
export default ToggleQuantity;
