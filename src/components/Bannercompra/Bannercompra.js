import React from 'react';
import './Bannercompra.css'
import euquero from '../../img/euquero.jpg';
import euqueroazul from '../../img/euqueroazul.jpg';
function Bannercompra(){
    return(
    <div className="container-banner-compra">
        <img className="banner-euquero" src={euquero}/>
        <img  className="banner-euquero" src={euqueroazul}/>
    </div>
    );
}
export default Bannercompra;