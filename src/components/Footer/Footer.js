import React from "react";
import "./footer.css";
import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";
import hipercard from "../../img/hipercard.png";
import elo from "../../img/elo.png";
import americanexpress from "../../img/americanexpress.png";
import boleto from "../../img/boleto.png";
import pix from "../../img/pix.png";
import instagramshopee from "../../img/instagramshopee.png";
import tiktokshopee from "../../img/tiktokshopee.png";
import twittershopee from "../../img/twittershopee.png";
import facebookshopee from "../../img/facebookshopee.png";
import linkedinshopee from "../../img/linkedinshopee.png";
import qrcode from "../../img/qrcode.png";
import googleplay from "../../img/googleplay.png";
import appstore from "../../img/appstore.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="width">
          <div className="title-footer">
            <h4>ATENDIMENTO AO CLIENTE</h4>
          </div>
          <p>Central de Ajuda</p>
          <p>Como Comprar</p>
          <p>Métodos de Pagamento</p>
          <p>Garantia Shopee</p>
          <p>Devolução e Reembolso</p>
          <p>Fale Conosco</p>
          <p>Ouvidoria</p>
        </div>

        <div className="width">
          <div className="title-footer">
            <h4>SOBRE A SHOPEE</h4>
          </div>
          <p>Sobre Nós</p>
          <p>Políticas Shopee</p>
          <p>Políticas de Privacidade</p>
          <p>Programa de Afiliados da Shopee</p>
          <p>Seja um Entregador Shopee</p>
          <p>Ofertas Relâmpago</p>
          <p>Shopee Blog</p>
          <p>Imprensa</p>
        </div>
        <div className="payment width">
          <div className="title-footer">
            <h4>PAGAMENTO</h4>
          </div>
          <div className="bankcard1">
            <div className="card-white">
              <img src={visa} />
            </div>
            <div className="card-white">
              <img src={mastercard} />
            </div>
            <div className="card-white">
              <img src={hipercard} />
            </div>
          </div>
          <div className="bankcard2">
            <div className="card-white">
              <img src={elo} />
            </div>
            <div className="card-white">
              <img src={americanexpress} />
            </div>
            <div className="card-white">
              <img src={boleto} />
            </div>
          </div>
          <div className="bankcard3">
            <div className="card-white">
              {" "}
              <img src={pix} />
            </div>
          </div>
        </div>
        <div className="width follow-us">
          <div className="title-footer">
            <h4>SIGA-NOS</h4>
          </div>
          <div className="siga-icons">
            <div className="icon-and-title">
              <img src={instagramshopee} />
              <p>Instagram</p>
            </div>
            <div className="icon-and-title">
              {" "}
              <img src={tiktokshopee} />
              <p>Tiktok</p>
            </div>
            <div className="icon-and-title">
              <img src={twittershopee} />
              <p>Twitter</p>
            </div>
            <div className="icon-and-title">
              {" "}
              <img src={facebookshopee} />
              <p>Facebook</p>
            </div>
            <div className="icon-and-title">
              <img src={linkedinshopee} />
              <p>Linkedin</p>
            </div>
          </div>
        </div>
        <div className="footer-qrcode width">
          <div className="qrcode">
            <img src={qrcode} />
          </div>
          <div className="googlestore">
            <img className="app-store" src={appstore} />
            <img className="app-store" src={googleplay} />
          </div>
        </div>
      </div>
      <div className="shopee-rodape">
        <p>©2023 Shopee. Todos os direitos reservados</p>
        <p>
          País e região: Singapura | Indonésia | Taiwan | Tailândia | Malásia |
          Vietnã | Filipinas | Brasil | México | Colombia | Chile
        </p>
      </div>
    </div>
  );
}
export default Footer;
