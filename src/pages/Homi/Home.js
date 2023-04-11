import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Banners from "../../components/Banners/Banners";
import Bannercompra from "../../components/Bannercompra/Bannercompra";
import Shopeeoficial from "../../components/shopeeoficial/Shopeeoficial";
import Footer from "../../components/Footer/Footer";
import Dayfindout from "../../components/day-findout/Dayfindout";
import Carrosel from "../../components/Carrosel/Carrosel";


function Home() {
  return (
    <div>
      <Header />
      <Banners />
      <Bannercompra />
      <Carrosel />
      <Shopeeoficial />
      <Dayfindout />
      <Footer />
    </div>
  );
}

export default Home;
