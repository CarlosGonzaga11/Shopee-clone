import React from "react";
import "./Shopeeoficial.css";
import shopeeoficialpascoa from "../../img/shopeeoficialpascoa.jpg";
import drinks from "../../img/drinks.jpg";
import lovito from "../../img/lovito.png";
import madeira from "../../img/madeira.jpg";
import madesa from "../../img/madesa.jpg";
import salon from "../../img/salon.jpg";
import desincha from "../../img/desincha.jpg";
import jhonson from "../../img/jhonson.jpg";
import colormaq from "../../img/colormaq.jpg";

function Shopeeoficial() {
  return (
    <div className="container-shopee">
      <div className="container-shopee-oficial">
        <div className="container-header-shopee-oficial">
          <div className="container-logo-shopee-oficial">
            <h4>SHOPEE OFICIAL</h4>
          </div>
          <div className="container-shopee-center">
            <div className="facility">
              <p>30 Dias Para Devolução</p>
            </div>
            <div className="facility">
              <p>Cupom de Frete Grátis</p>
            </div>
            <div className="facility">
              <p>Produtos Oficiais Da Marca</p>
            </div>
          </div>
          <div className="see-all">Ver Tudo</div>
        </div>
      </div>

      <div className="container-img-bussiness">
        <div className="container-pascoa">
          <img className="container-img-pascoa" src={shopeeoficialpascoa} />
        </div>
        <div className="container-company">
          <div className="company-line1">
            <div className="container-img">
              <img src={drinks} />
            </div>
            <div className="container-img">
              <img src={desincha} />
            </div>
            <div className="container-img">
              <img src={madesa} />
            </div>
            <div className="container-img">
              <img src={salon} />
            </div>
            <div className="container-img">
              <img src={jhonson} />
            </div>
            <div className="container-img">
              <img src={drinks} />
            </div>
           
          </div>
          <div className="company-line2">
            <div className="container-img">
              <img src={colormaq} />
            </div>
            <div className="container-img">
              <img src={madesa} />
            </div>
            <div className="container-img">
              <img src={jhonson} />
            </div>
            <div className="container-img">
              <img src={lovito} />
            </div>
            <div className="container-img">
              <img src={madeira} />
            </div>
            <div className="container-img">
              <img src={drinks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shopeeoficial;
