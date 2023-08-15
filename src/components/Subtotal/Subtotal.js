import React from "react";
import "../Subtotal/Subtotal.css";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from "react-router-dom";
import Formatter from "../../formatter";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const getTotalPrice = (basket) => {
    const value = basket?.reduce((amount, item) => item.price + amount, 0);
    return value;
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal({basket.length} items):
        <strong>{Formatter.format(getTotalPrice(basket))} </strong>
      </p>
      <small className="subTotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button
        className=" subtotal__button"
        onClick={(e) => navigate("/payment")}
      >
        Procced to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
