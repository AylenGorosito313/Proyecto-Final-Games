import React from "react";
import "./css/CardHome.css";
import {
  ContImagen,
  TituloCard,
  Div,
  TituloContainer,
  Cards,
  Imagen,
} from "./CardsStyled";

function Card({ name, img, id }) {
  return (
    <div className="div-cards-home">
      <Cards>
        <TituloCard>{name}</TituloCard>

        <ContImagen>
          <Imagen src={img} />
        </ContImagen>
      </Cards>
    </div>
  );
}

export default Card;
