import styled from "styled-components";
import { Link } from "react-router-dom";

export const ConteinerCard = styled.div`
  background: #312f45;
  padding: 20px 40px 20px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  weight: 80w;
  flex-wrap: wrap;
`;

export const Div = styled.div`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  weight: auto;
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 10px 10px 10px 10px;
  border-radius: 30px;
  top: 0px;
  background: #2b273b;

  border-radius: 10px;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22),
    0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ContImagen {
    justify-content: center;
  }
`;

export const Imagen = styled.img`
  justify-content: center;

  height: 300px;
  width: 220px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ContImagen = styled.div`
  display: flex;
  height: auto;
  width: auto;
  justify-content: center;
  align-items: center;
`;

export const TituloContainer = styled.div`
padding:-top:40px;
display: flex;
text-overflow: ellipsis !important;
align-items: center
justify-content: center;

`;
export const TituloCard = styled.h1`
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0px 5px 0px 5px;
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 15px;
  justify-content: center;
  cursor: pointer;
`;
export const TituloCardIndex = styled.h1`
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0px 5px 0px 5px;
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  justify-content: center;
  cursor: pointer;
`;
