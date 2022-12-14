import React from "react";

import {
  ContImagen,
  TituloCard,
  Div,
  TituloContainer,
  Cards,
  Imagen,
} from "./Styleds/CardsStyled";

function Card({ name, img,id}) {
  return (
    <Div>
      <Cards>
   

        <TituloCard>{id}</TituloCard>
     
          <TituloCard>{name}</TituloCard>
       

        <ContImagen>
          <Imagen src={img} />
        </ContImagen>
      </Cards>
    </Div>
  );
}

export default Card;
