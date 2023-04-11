import React,{useContext} from 'react';
import { CartContext } from '../../contexts/cartContext';
import './Car.css';
import sl from '../../img/sl.png'
import deletee from '../../svg/deletee.svg'
import {Link} from 'react-router-dom';
import Productcard from '../Productcard/Productcard';
import CardCart from '../CardCart/CardCart';

function Car(){
    const { handleCardClick} = useContext(CartContext);
    const {selectedCards} = useContext(CartContext);
    console.log('esse e meu seelctec cart dentro do carrinho', selectedCards);
    console.log('esse e o meu handleclick',handleCardClick);

    return(
        <div className="container-car-total">
         
          <Link to="/">
                <img src={sl} Link to="/" />  
                </Link>

        <div className="container-car">
            <div className="list-title">
                <p>Produtos</p>
                <p>Quantidade</p>
                <p>Preço</p>
                <p>Preço Total</p>
                <p>Apagar</p>
            </div>
            <div className="conteudo-cart">      
            {selectedCards.map((cartitem, index) => (
             <CardCart
                key={cartitem.id}
                name={cartitem.name}
                image={cartitem.image}
                price={cartitem.price}
             
        />
            ))}
     
            </div>
     
        </div>
        <div className="confirm">
                <p>Total: R$9,88</p>
                <button>Continuar</button>
              </div> 
   
        </div>
    );
}
export default Car;