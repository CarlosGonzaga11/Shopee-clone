import React from 'react';
import './CarroselCard.css';



function CarroselCard({image,titulo}){
    return(
    <div className="container-card-carrosel">
        <div className="container-img-carrosel">
            <img className="img-carrosel" src={image}/>
        </div>
        <div className="container-title-carrosel">
            <p>{titulo}</p>
        </div>
      
    </div>
    );
}
export default CarroselCard;