import React from "react";
import "./Banner.css";
import Slider from "../../components/Slider/Slider";
import Cupons from "../Cupons/Cupons";
import ListIcon from "../ListIcon/ListIcon";
function Banners() {
  return (
    <div className="container">
      <div className="container-banner">
        <Slider />
        <Cupons />
      </div>
      <div className="icons-principal">
        <ListIcon />
      </div>
    </div>
  );
}
export default Banners;
