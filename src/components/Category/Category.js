import React , {useState}from "react";
import './category.css';
import casaedecoracao from "../../img/casaedecoracao.png";
import celularesedispositivos from "../../img/celularesedispositivos.png";
import brinquedo from "../../img/brinquedo.png";
import roupasfemininas from "../../img/roupasfemininas.jpg";
import beleza from "../../img/beleza.png";
import sapatosfemininos from "../../img/sapatosfemininos.png";
import Categorycard from "../categorycard/Categorycard";
import movetoLeft from '../../svg/movetoLeft.svg'
import movetoRight from '../../svg/movetoRight.svg'
const categoria = [
  {
    id: 1,
    name: "Casa e Decoração",
    img: casaedecoracao,
  },
  {
    id: 2,
    name: "Celulares e Dispositivos",
    img: celularesedispositivos,
  },
  {
    id: 3,
    name: "Brinquedos e Hobbies",
    img: brinquedo,
  },
  {
    id: 4,
    name: "Roupas Femininas",
    img: roupasfemininas,
  },
  {
    id: 5,
    name: "Beleza",
    img: beleza,
  },
  {
    id: 6,
    name: "Sapatos Femininos",
    img: sapatosfemininos,
  },
  {
    id: 7,
    name: "Bolsas Femininas",
    img: sapatosfemininos,
  },
  {
    id: 8,
    name: "Mãe e Bebê",
    img: sapatosfemininos,
  },
  {
    id: 9,
    name: "Motocicletas",
    img: sapatosfemininos,
  },
  {
    id: 10,
    name: "Áudio",
    img: sapatosfemininos,
  },
  {
    id: 11,
    name: "Animais Domésticos",
    img: sapatosfemininos,
  },
  {
    id: 12,
    name: "Câmeras e Drones",
    img: sapatosfemininos,
  },
  {
    id: 13,
    name: "Acessórios de Moda",
    img: sapatosfemininos,
  },
  {
    id: 14,
    name: "Roupas Masculinas",
    img: sapatosfemininos,
  },
  {
    id: 15,
    name: "Papelaria",
    img: sapatosfemininos,
  },
  {
    id: 16,
    name: "Sapatos Masculinos",
    img: sapatosfemininos,
  },
  {
    id: 17,
    name: "Bolsas Masculinas",
    img: sapatosfemininos,
  },
  {
    id: 18,
    name: "Moda Infantil",
    img: sapatosfemininos,
  },
  {
    id: 19,
    name: "Automóveis",
    img: sapatosfemininos,
  },
  {
    id: 20,
    name: "Relógios",
    img: sapatosfemininos,
  },
  
  {
    id: 21,
    name: "Sapatos Masculinos",
    img: sapatosfemininos,
  },
  {
    id: 22,
    name: "Bolsas Masculinas",
    img: sapatosfemininos,
  },
  {
    id: 23,
    name: "Moda Infantil",
    img: sapatosfemininos,
  },
  {
    id: 24,
    name: "Automóveis",
    img: sapatosfemininos,
  },
  {
    id: 25,
    name: "Relógios",
    img: sapatosfemininos,
  },
  {
    id: 26,
    name: "Relógios",
    img: sapatosfemininos,
  },


];

function Category() {

  return (
    <div className="container-category">
      <div className="container-show">
      <div className="categoria-title">
        <h4>CATEGORIAS</h4>
      </div>
      <div className="categoria-card">
        {categoria.map((cate, index) => {
          return <Categorycard
            image={cate.img}
            title={cate.name}
            id={cate.id}
            
          />
          
                  
        })}
      </div>
      <div className="icons-move">
      <div className="movetoLeft"> <img src={movetoLeft}/> </div>
      <div className="movetoRight"><img src={movetoRight}/> </div>
      </div>
      </div>
    </div>
  );
}
export default Category;
