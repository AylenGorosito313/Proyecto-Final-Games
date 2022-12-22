import React from "react";
import "./css/CardHome.css";
import {
  ContImagen,
  TituloCard,
  Div,
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

// import React from 'react'
// import "./css/CardHome.css";
// function Card({ name, img, id }) {
// <div className='cards'>
//   <div className='cards'>
//     <img src={img} alt='img'/>
// <figcaption>{name}</figcaption>

//   </div>
// </div>
// }

// export default Card
