import React, { useState } from "react";
import "./Home.css";
import Header from "../../componentes/Navbar/Header/Header";
import ExploreMenu from "../../componentes/Navbar/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../componentes/FoodDisplay/FoodDisplay";
import AppDownload from "../../componentes/AppDownload/AppDownload";
import Map from "../../componentes/Map/Map";
import Prodetail from "../../componentes/Prodetail/Prodetail";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <Prodetail />
      <AppDownload />
      <Map />
    </div>
  );
};

export default Home;
