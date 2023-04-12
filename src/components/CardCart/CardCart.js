import React, { useContext, useState } from "react";
import "./CardCart.css";
import deletee from "../../svg/deletee.svg";
import { CartContext } from "../../contexts/cartContext";

function CardCart({
  key,
  id,
  name,
  image,
  price,
  quantity,
  removeFromCart,
  UpdatedQuantity,
  setSelectedCards,
}) {
  const { selectedCards } = useContext(CartContext);
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };
  const handleUpdateQuantity = (action) => {
    let newQuantity = localQuantity;
    if (action === "decrease" && localQuantity > 1) {
      newQuantity -= 1;
    } else if (action === "increase") {
      newQuantity += 1;
    }
    if (newQuantity !== undefined) {
      setLocalQuantity(newQuantity);
      UpdatedQuantity(newQuantity);
    }
    const updatedCards = selectedCards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          quantity: newQuantity,
        };
      }
      return card;
    });

    setSelectedCards(updatedCards);
  };
  const totalCartPrice = selectedCards.reduce((total, card) => {
    return total + parseInt(card.price) * card.quantity;
  }, 0);
  console.log(totalCartPrice);
  return (
    <div className="container-CardCart">
      <div className="area-card-cart">
        <div className="image-CardCart">
          <img src={image} />
        </div>
        <div className="name-CardCart">
          <p>{name}</p>
        </div>
      </div>
      <div className="CardCart">
        <div className="area-product">
          <button onClick={() => handleUpdateQuantity("decrease")}>-</button>
          {quantity}
          <button onClick={() => handleUpdateQuantity("increase")}>+</button>
        </div>
      </div>
      <div className="CardCart">R${price}</div>
      <div className="CardCart">R${parseInt(price) * quantity}</div>
      <div className="CardCart">
        <div className="area-product">
          <button onClick={handleRemoveFromCart}>
            <img src={deletee} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardCart;
