import React from "react";
import CarroselCard from "../CarroselCard/CarroselCard";
import "./carrosel.css";

import casaedecoracao from "../../img/casaedecoracao.png";
import celularesedispositivos from "../../img/celularesedispositivos.png";
import brinquedo from "../../img/brinquedo.png";
import roupasfemininas from "../../img/roupasfemininas.jpg";
import beleza from "../../img/beleza.png";
import sapatosfemininos from "../../img/sapatosfemininos.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";


function Carrosel() {
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
            id:11,
            name: "Roupas Femininas",
            img: roupasfemininas,
          },
          {
            id: 12,
            name: "Beleza",
            img: beleza,
          },
          {
            id: 13,
            name: "Sapatos Femininos",
            img: sapatosfemininos,
          },
          {
            id: 14,
            name: "Bolsas Femininas",
            img: sapatosfemininos,
          },
          {
            id: 15,
            name: "Mãe e Bebê",
            img: sapatosfemininos,
          },
          {
            id: 16,
            name: "Motocicletas",
            img: sapatosfemininos,
          },
          {
            id: 17,
            name: "Áudio",
            img: sapatosfemininos,
          },
          {
            id: 18,
            name: "Roupas Femininas",
            img: roupasfemininas,
          },
          {
            id: 19,
            name: "Beleza",
            img: beleza,
          },
          {
            id: 21,
            name: "Sapatos Femininos",
            img: sapatosfemininos,
          },
          {
            id: 22,
            name: "Bolsas Femininas",
            img: sapatosfemininos,
          },
          {
            id: 23,
            name: "Mãe e Bebê",
            img: sapatosfemininos,
          },
          {
            id: 24,
            name: "Motocicletas",
            img: sapatosfemininos,
          },
          {
            id: 25,
            name: "Áudio",
            img: sapatosfemininos,
          },
          {
            id: 26,
            name: "Roupas Femininas",
            img: roupasfemininas,
          },
         
       
          
      ];

     
      
   
      return (
        
        <div className="">
           <Swiper 
           
          className="container-swiper"
          slidesPerView={10} // Define a quantidade de slides por view como 9
          spaceBetween={0} // Define o espaço entre os slides como 0
        >
          {/* Use a função map() para iterar sobre o array categoria e renderizar os slides da primeira linha */}
          {categoria.slice(0, 20).map((cate, index) => (
            <SwiperSlide key={index}>
              <CarroselCard
                titulo={cate.name}
                image={cate.img}
              />
            </SwiperSlide>
          ))}
              </Swiper>

              <Swiper slidesPerView={10} // Define a quantidade de slides por view como 9
          spaceBetween={0}>
          {/* Use a função map() para iterar sobre o array categoria e renderizar os slides da segunda linha */}
          {categoria.slice(9, 26).map((cate, index) => (
            <SwiperSlide key={index}>
              <CarroselCard
                titulo={cate.name}
                image={cate.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        </div>
       
      );
    }
export default Carrosel;


