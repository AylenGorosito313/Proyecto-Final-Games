import styled from "styled-components";

export const ContainerSearch = styled.div`
/* margin-top: 20px; */
/* margin-right: 10px; */
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
height: 20px;
width: 15vw;
font-family: "Poppins",sans-serif;
font-siz: 10px;
padding: 8px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: row;
-ms-flex-direction: row;
flex-direction: row;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
/* padding: 8px; */
background: rgb(75,73,73);
background: linear-gradient(90deg,rgba(75,73,73,0.4460493670124299) 0%,rgba(80,80,80,0.6645367619704132) 100%);
border-radius: 20px;
-webkit-flex: none;
-ms-flex: none;
flex: none;
-webkit-order: 0;
-ms-flex-order: 0;
order: 0;
-webkit-align-self: stretch;
-ms-flex-item-align: stretch;
align-self: stretch;
`;



export const Layout = styled.div`
  background: transparent;
  display: flex;
justify-content: flex-start;


    justify-content: flex-end;
`;


export const Input = styled.input`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-siz: 30px;
  margin-left: 10px;
  color: #d9d9d9;
  font-weight: 300;
  height: 30px;
  width: 20vw;
  border: none;
  background: transparent;
  outline: none;
  &:active {
    border: none;
    outline: none;
  }
  ::placeholder { color: #CDC5C5; }
`;

export const Div = styled.div`
  display: flex;
  height: 40px;
  width: 160px;
  justify-content: center;
  background: #382874;
  opacity: 0.1;
  align-items: center;

  border-radius: 10%;
`;

export const Svg = styled.div`
  margin-left: 10px;
  display: flex;
  height: 30px;
  width: 30px;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #1cabc9;
    filter: contrast(200%);
  }

  &:active {
    filter: contrast(100%);
  }
`;

export const Hr = styled.div`
  height: 0.5px;
  background-color: #b6bdf0;
  outline: none !important;
  box-shadow: #2f3ca2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
