import React, { useState } from "react";
import "./Categorycard.css";

function Categorycard({ image, title}) {
  return (
    <div className="container-categorycard-slider">
      <div className="container-card">
        <img className="image-circle" src={image}></img>
        <p className="title-text">{ title}</p>
       
      </div>
    </div>
  );
}
export default Categorycard;
