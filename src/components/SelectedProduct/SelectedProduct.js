import React from "react";
import "../SelectedProduct/SelectedProduct.css";
import { useStateValue } from "../../StateProvider";

function SelectedProduct({ id, title, price, image, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      Id: id,
    });
  };
  return (
    <div className="selectedProduct">
      <img className="selectedProduct__image" src={image} alt="" />

      <div className="selectedProduct__info">
        <p className="selectedProduct__title">{title} </p>
        <p className="selectedProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="selectedProduct__rating">
          {Array(rating)
            .fill()
            .map((item, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button className="button" onClick={removeItemFromBasket}>
            remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default SelectedProduct;
