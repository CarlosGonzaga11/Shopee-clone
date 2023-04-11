import React from 'react';
import './Slider.css';
import carrosel1 from '../../img/carrosel1.jpg'
import carrosel2 from '../../img/carrosel2.jpg'
import carrosel3 from '../../img/carrosel3.jpg'
import carrosel4 from '../../img/carrosel4.jpg'
import carrosel5 from '../../img/carrosel5.png'
/*let count = 1;
document.getElementById('radio1').checked = true;
setInterval(function() {
    nextImage();
},2000)
function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById('radio'+count).checked = true;
}
*/
function Slider(){
    return(
    <div className="slider">
        <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"></input>
            <input type="radio" name="radio-btn" id="radio2"></input>
            <input type="radio" name="radio-btn" id="radio3"></input>
            <input type="radio" name="radio-btn" id="radio4"></input>
            <input type="radio" name="radio-btn" id="radio5"></input>
     
        <div className="slide first">
            <img src={carrosel1} alt="imagem 1"/>
        </div>
        <div className="slide">
        <img src={carrosel2} alt="imagem 2"/>
        </div>
        <div className="slide ">
        <img src={carrosel3} alt="imagem 3"/>
        </div>
        <div className="slide">
        <img src={carrosel4} alt="imagem 4"/>
        </div>
        <div className="slide">
        <img src={carrosel5} alt="imagem 4"/>
        </div>
        <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
        </div>
        </div>
        <div className="manual-navigation">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
            <label for="radio5" className="manual-btn"></label>
        </div>
    </div>
);
}
export default Slider;