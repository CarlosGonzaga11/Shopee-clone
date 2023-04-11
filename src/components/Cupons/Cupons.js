import React from 'react';
import './Cupons.css';
import cupons from '../../img/cupons.jpg';
import cupons2 from '../../img/cupons2.jpg';

function Cupons(){
    return(
    <div className="container-cupons">
        <img src={cupons}/>
        <img src={cupons2}/>
    </div>
    );
}
export default Cupons;
