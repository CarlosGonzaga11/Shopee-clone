import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./dayfindout.css";
import Productcard from "../Productcard/Productcard";
import produto5camisa from "../../img/produto5camisa.jpg";
import produtocalca from "../../img/produtocalca.jpg";
import produtocamisa from "../../img/produtocamisa.jpg";
import produtobone from "../../img/produtobone.jpg";
import produtotenis from "../../img/produtotenis.jpg";
import produtojaqueta from "../../img/produtojaqueta.jpg";
import produtomeia from "../../img/produtomeia.jpg";
import produtokitacessorio from "../../img/produtokitacessorio.jpg";

const product = [
  {
    id: 1,
    name: "Kit 5 Camiseta Masculina Básica Lisa Slim Algodão ORIGNS",
    img: produto5camisa,
    sold: "451",
    quantity: 3,
    price: "139,00",
    nacional: "Vendedor Local",
  },
  {
    id: 2,
    name: "Calça Jeans Skinny Com Ziper Lycra Elastano Masculina Nova Tendencia",
    img: produtocalca,
    sold: "7,8",
    price: "53,96",
    quantity: 1,
    nacional: "",
  },
  {
    id: 3,
    name: "kit 5 Camisetas Atacado Revenda multimarcas masculino Alto Padrão",
    img: produtocamisa,
    sold: "16",
    quantity: 1,
    price: "89,90",
    nacional: "",
  },
  {
    id: 4,
    name: "Jaqueta Casual Masculina De Algodão Alcochoada Cor Sólida Combina Com Tudo-Alcochoado Esportiva Grossa",
    img: produtojaqueta,
    sold: "3,5",
    price: "77,91",
    quantity: 1,
    nacional: "Vendedor Local",
  },
  {
    id: 5,
    name: "Tênis AIR FORCE, caminhada, esportes, corrida, masculino, feminino, promoção",
    img: produtotenis,
    sold: "217",
    quantity: 1,
    price: "41,99",
    nacional: "",
  },
  {
    id: 6,
    name: "Boné Aba Curva Curvada Resina Premium Liso Masculino Dad Hat Strapback Ajustável Fitão",
    img: produtobone,
    sold: "2",
    quantity: 1,
    price: "99,99",
    nacional: "",
  },
  {
    id: 7,
    name: "Kit 24 Pares Meias Soquetes Menor Preço do Brasil",
    img: produtomeia,
    sold: "763",
    quantity: 1,
    price: "131,80",
    nacional: "",
  },
  {
    id: 8,
    name: "Kit 5 Camiseta Masculina Básica Lisa Slim Algodão ORIGNS",
    img: produto5camisa,
    sold: "5",
    price: "163,00",
    quantity: 1,
    nacional: "",
  },
  {
    id: 9,
    name: "Calça Jeans Skinny Com Ziper Lycra Elastano Masculina Nova Tendencia",
    img: produtocalca,
    sold: "93,1",
    price: "74,90",
    quantity: 1,
    nacional: "Vendedor Local",
  },
  {
    id: 10,
    name: "kit 5 Camisetas Atacado Revenda multimarcas masculino Alto Padrão",
    img: produtocamisa,
    sold: "7,9",
    quantity: 1,
    price: "42,92",
    nacional: "Vendedor Local",
  },
  {
    id: 11,
    name: "Jaqueta Casual Masculina De Algodão Alcochoada Cor Sólida Combina Com Tudo-Alcochoado Esportiva Grossa",
    img: produtojaqueta,
    sold: "5,1",
    quantity: 1,
    price: "49,90",
    nacional: "Vendedor Local",
  },
  {
    id: 12,
    name: "Tênis AIR FORCE, caminhada, esportes, corrida, masculino, feminino, promoção",
    img: produtotenis,
    quantity: 1,
    sold: "733",
    price: "29,99",
  },
  {
    id: 13,
    name: "Conjunto Relógio Masculino + Corrente + Pulseira + Óculos + Boné Fé",
    img: produtokitacessorio,
    sold: "9",
    quantity: 1,
    price: "179,10",
    nacional: "Vendedor Local",
  },
  {
    id: 14,
    name: "Bolsas Femininas",
    img: produtobone,
    sold: "1,1",
    quantity: 1,
    price: "220,99",
    nacional: "",
  },
  {
    id: 15,
    name: "Kit 24 Pares Meias Soquetes Menor Preço do Brasil",
    img: produtomeia,
    sold: "43",
    quantity: 1,
    price: "17,99",
    nacional: "Vendedor Local",
  },
  {
    id: 16,
    name: "Jaqueta Casual Masculina De Algodão Alcochoada Cor Sólida Combina Com Tudo-Alcochoado Esportiva Grossa",
    img: produtojaqueta,
    sold: "5,1",
    quantity: 1,
    price: "49,90",
    nacional: "Vendedor Local",
  },
  {
    id: 17,
    name: "Tênis AIR FORCE, caminhada, esportes, corrida, masculino, feminino, promoção",
    img: produtotenis,
    sold: "733",
    quantity: 1,
    price: "29,99",
  },
  {
    id: 18,
    name: "Conjunto Relógio Masculino + Corrente + Pulseira + Óculos + Boné Fé",
    img: produtokitacessorio,
    sold: "9",
    quantity: 1,
    price: "179,10",
    nacional: "Vendedor Local",
  },
  {
    id: 19,
    name: "Boné Aba Curva Curvada Resina Premium Liso Masculino Dad Hat Strapback Ajustável Fitão",
    img: produtobone,
    sold: "1,1",
    quantity: 1,
    price: "220,99",
    nacional: "",
  },
  {
    id: 20,
    name: "Kit 24 Pares Meias Soquetes Menor Preço do Brasil",
    img: produtomeia,
    sold: "43",
    quantity: 1,
    price: "17,99",
    nacional: "Vendedor Local",
  },
  {
    id: 21,
    name: "Jaqueta Casual Masculina De Algodão Alcochoada Cor Sólida Combina Com Tudo-Alcochoado Esportiva Grossa",
    img: produtojaqueta,
    sold: "5,1",
    quantity: 1,
    price: "49,90",
    nacional: "Vendedor Local",
  },
  {
    id: 22,
    name: "Tênis AIR FORCE, caminhada, esportes, corrida, masculino, feminino, promoção",
    img: produtotenis,
    sold: "733",
    quantity: 1,
    price: "29,99",
  },
  {
    id: 23,
    name: "Conjunto Relógio Masculino + Corrente + Pulseira + Óculos + Boné Fé",
    img: produtokitacessorio,
    sold: "9",
    price: "179,10",
    quantity: 1,
    nacional: "Vendedor Local",
  },
  {
    id: 24,
    name: "Kit 5 Camiseta Masculina Básica Lisa Slim Algodão ORIGNS",
    img: produto5camisa,
    sold: "451",
    price: "139,00",
    quantity: 1,
    nacional: "Vendedor Local",
  },
  {
    id: 25,
    name: "Calça Jeans Skinny Com Ziper Lycra Elastano Masculina Nova Tendencia",
    img: produtocalca,
    sold: "7,8",
    quantity: 1,
    price: "53,96",
    nacional: "",
  },
  {
    id: 26,
    name: "kit 5 Camisetas Atacado Revenda multimarcas masculino Alto Padrão",
    img: produtocamisa,
    sold: "16",
    price: "89,90",
    quantity: 1,
    nacional: "",
  },
];
function Dayfindout() {
  const [selectedCards, setSelectedCards] = useState([]);

  const { handleCardClick } = useContext(CartContext);
  return (
    <div className="container-dayfindout">
      <div className="find">
        <p className="red">DESCOBERTAS DO DIA</p>
      </div>

      <div className="dayfindout">
        {product.map((prod) => (
          <Productcard
            key={prod.id}
            id={prod.id}
            name={prod.name}
            quantity={prod.quantity}
            image={prod.img}
            sold={prod.sold}
            price={prod.price}
            nacional={prod.nacional}
          />
        ))}
      </div>
    </div>
  );
}

export default Dayfindout;
