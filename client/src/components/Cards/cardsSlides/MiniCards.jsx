import React from "react";
import { useSelector } from "react-redux";
import "./MiniCards.css";
import { Imagen } from "./StyledMini";
export default function MiniCards() {
  const { games } = useSelector((state) => state.prueba);
  const sliderImages = games.map((el) => el.background_image);
  return (
    <div className="container-miniCards">
      <div className="img-container">
        
          <Imagen src={sliderImages} alt="mincards" />
 
      </div>
      <div className="cont-titulo">
        {sliderImages.map((name) => <p>{name}</p>)}
      </div>
    </div>
  );
}
