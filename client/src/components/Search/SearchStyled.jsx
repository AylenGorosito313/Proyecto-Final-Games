import styled from "styled-components";

export const ContainerSearch = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  justify-content: center;
  height: 20px;
  width: 20vw;
  font-family: "Poppins", sans-serif;
  font-siz: 10px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }
  &:active {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  background: rgb(75,73,73);
  background: linear-gradient(90deg, rgba(75,73,73,0.4460493670124299) 0%, rgba(80,80,80,0.6645367619704132) 100%);
border-radius:20px;
  flex: none;
  order: 0;
  align-self: stretch;
`;



export const Layout = styled.div`
  background: transparent;
  display: flex;
justify-content: flex-start;
  padding: 20px;
    width: 80vh;
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
