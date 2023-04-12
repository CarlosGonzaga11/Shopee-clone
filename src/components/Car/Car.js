import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./Car.css";
import sl from "../../img/sl.png";
import deletee from "../../svg/deletee.svg";
import { Link } from "react-router-dom";
import Productcard from "../Productcard/Productcard";
import CardCart from "../CardCart/CardCart";

function Car() {
  const { handleCardClick, removeFromCart, UpdatedQuantity } =
    useContext(CartContext);
  const { selectedCards, setSelectedCards } = useContext(CartContext);

  console.log("esse e meu seelctec cart dentro do carrinho", selectedCards);
  console.log("esse e o meu handleclick", removeFromCart);
  const totalCartPrice = selectedCards.reduce((total, card) => {
    return total + parseInt(card.price) * card.quantity;
  }, 0);
  return (
    <div className="container-car-total">
      <Link to="/">
        <img className="logo-car" src={sl} Link to="/" />
      </Link>

      <div className="container-car">
        <div className="list-title">
          <p>Produtos</p>
          <p>Quantidade</p>
          <p>Preço Unitario</p>
          <p>Preço Total</p>
          <p>Apagar</p>
        </div>
        <div className="conteudo-cart">
          {selectedCards.map((cartitem, index) => (
            <CardCart
              key={cartitem.id}
              id={cartitem.id}
              quantity={cartitem.quantity}
              name={cartitem.name}
              image={cartitem.img}
              price={cartitem.price}
              removeFromCart={removeFromCart}
              UpdatedQuantity={UpdatedQuantity}
              setSelectedCards={setSelectedCards}
            />
          ))}
        </div>
      </div>
      <div className="confirm">
        <p>Total: R${totalCartPrice}</p>

        <button>Continuar</button>
      </div>
    </div>
  );
}
export default Car;
