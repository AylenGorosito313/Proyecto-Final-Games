import styled from "styled-components";

export const Imagen = styled.img`
  height: 98vh;
  width: 100%;
  justify-content: center;
  border-radius: 20px;
  filter: blur(0.5px);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @media (max-width: 500px) {
    height: auto;
    width: auto;
  }
`;