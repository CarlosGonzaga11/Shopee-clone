import React from 'react';
import './CardCart.css';
import deletee from '../../svg/deletee.svg'
import Productcard from "../Productcard/Productcard";
import produto5camisa from  '../../img/produto5camisa.jpg'
import produtocalca from "../../img/produtocalca.jpg";
import produtocamisa from "../../img/produtocamisa.jpg";
import produtobone from "../../img/produtobone.jpg";
import produtotenis from "../../img/produtotenis.jpg";
import produtojaqueta from "../../img/produtojaqueta.jpg";
import produtomeia from "../../img/produtomeia.jpg";
import produtokitacessorio from "../../img/produtokitacessorio.jpg";
function CardCart({name,image ,price,  quantity}){
    const imageUrl = process.env.PUBLIC_URL + image;
    return(
        <div className="container-CardCart">
            <div className="image-CardCart">
      
               <img src={image}/>
                {name}
            </div>
            <div className="CardCart">
            <div className="area-product"><button>-</button>1<button>+</button></div>
                     
            </div>
            <div className="CardCart">
          
                {price}
            </div>
            <div className="CardCart">
                {price}
            </div>
            <div className="CardCart">
            <div className="area-product"><button><img src={deletee} /></button></div>
            </div>
         
        </div>
    );
}
export default CardCart;