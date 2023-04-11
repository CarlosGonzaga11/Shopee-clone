import React from 'react';
import './ListIcon.css';
import moedas from '../../img/moedas.png';
import games from '../../img/games.png';
import frete from '../../img/frete.png';
import cuponicon from '../../img/cuponicon.png';
import bagshopee from '../../img/bagshopee.png';
import iconcar from '../../img/iconcar.png';
import tecnologia from '../../img/tecnologia.png';
import casashopee from '../../img/casashopee.png';
import ytb from '../../img/ytb.png';
import doacao from '../../img/doacao.png';

function ListIcon(){
    return(
    <div className="container-list">
        <div className="icon-and-text">
        <img className="icon-principal"src={moedas} alt=""/>
        <p className="name-icon">Moedas</p>
        </div>
        <div className="icon-and-text">
        <img className="icon-principal"src={games} alt=""/>
        <p className="name-icon">Jogos e Prêmios</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={frete} alt=""/>
        <p className="name-icon">Frete Grátis</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={cuponicon} alt=""/>
        <p className="name-icon">Cupons</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={bagshopee} alt=""/>
        <p className="name-icon">Shopee Oficial</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={iconcar} alt=""/>
        <p className="name-icon">Mercado</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={tecnologia} alt=""/>
        <p className="name-icon">Tecnologia</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={casashopee} alt=""/>
        <p className="name-icon">Casa Shopee</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={ytb} alt=""/>
        <p className="name-icon">Youtube</p>
        </div>
        <div  className="icon-and-text">
        <img className="icon-principal"src={doacao} alt=""/>
        <p className="name-icon">Doações</p>
        </div>
        
        
 
    
    
  
  
      
      

        
    </div>
    );
}
export default ListIcon;