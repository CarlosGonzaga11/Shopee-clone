import React from "react";
import "./Header.css";
import sl from "../../img/sl.png";
import bell from "../../svg/bell.svg";
import help from "../../svg/help.svg";
import instagram from "../../svg/instagram.svg";
import internet from "../../svg/internet.svg";
import search from "../../svg/search.svg";
import shopcar from "../../svg/shopcar.svg";
import tiktok from "../../svg/tiktok.svg";
import twitter from "../../svg/twitter.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-header">
      <div className="container-list">
        <ul className="list-left">
          <li>
            <a>Central do Vendedor</a>
          </li>
          <li>
            <a>Vender na Shopee</a>
          </li>
          <li>
            <a>Baixe o App</a>
          </li>
          <li>
            <div className="contaienr-follow-icons">
              <a>Siga-nos no</a>
              <div className="social-icons">
                <img className="icons-social-width" src={instagram} />
                <img className="icons-social-width" src={twitter} />
                <img className="icons-social-width" src={tiktok} />
              </div>
            </div>
          </li>
        </ul>
        <ul className="list-right">
          <li>
            <a>Notificações</a>
          </li>
          <li>
            <a>Ajuda</a>
          </li>
          <li>
            <a>Português-BR</a>
          </li>
          <li>
            <a>Cadastrar</a>
          </li>
          <li>
            <a>Entre</a>
          </li>
        </ul>
      </div>
      <div className="header-center">
        <div className="container-logo">
          <img src={sl} className="logo" />
        </div>
        <div className="input-container">
          <label className="label-input">
            <img src={search} />
          </label>
          <input
            className="input-search"
            placeholder="Buscar na Shopee"
          ></input>
        </div>
        <Link to="/car">
        <button className="shop-car">
          <img src={shopcar} />
        </button>
        </Link>
      </div>
      <div className="container-itens-search">
        <div className="itens-search">
          <ul className="itens-search-itens">
            <li class="itens-search-item">
              <a>Bebe Reborn</a>
            </li>
            <li class="itens-search-item">
              <a>Airsoft</a>
            </li>
            <li class="itens-search-item">
              <a>Ovo de Pascoa</a>
            </li>
            <li class="itens-search-item">
              <a>Bota Feminina</a>
            </li>
            <li class="itens-search-item">
              <a>Alexa</a>
            </li>
            <li class="itens-search-item">
              <a>Ps5</a>
            </li>
            <li class="itens-search-item">
              <a>Conjunto Feminino</a>
            </li>
            <li class="itens-search-item">
              <a>Bolsa Maternidade</a>
            </li>
            <li class="itens-search-item">
              <a>Air Fryer</a>
            </li>
            <li class="itens-search-item">
              <a>Chuteira Futsal</a>
            </li>
            <li class="itens-search-item">
              <a>Ps4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
