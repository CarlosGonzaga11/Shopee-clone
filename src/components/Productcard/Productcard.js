import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./Productcard.css";

function Productcard({ id, name, sold, price, image, nacional, onClick }) {
  const { handleCardClick } = useContext(CartContext);

  return (
    <div className="container-cardx" onClick={() => handleCardClick(id)}>
      <div className="container-img">
        <img className="width-img" src={image} />
      </div>
      <div className="container-details">
        <p className="title-product">{name}</p>
        {nacional ? (
          <div className="nacional">
            <p>{nacional}</p>
          </div>
        ) : (
          <div className="sem-nacional">
            <p>{nacional}</p>
          </div>
        )}

        <div className="price-and-sell">
          <p className="red">R${price}</p>
          <p className="sold">{sold} vendidos</p>
        </div>
      </div>
    </div>
  );
}
export default Productcard;
