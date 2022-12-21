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
 flex-direction: row-reverse;
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
background: rgb(217,217,217);
background: linear-gradient(0deg, rgba(217,217,217,0.7541726163121498) 2%, rgba(217,217,217,0.7121558095894608) 100%);
  border-radius: 10px;

  flex: none;
  order: 0;
  align-self: stretch;
`;

export const Select = styled.select`
height: 30px;
width: 10vw;

  border:none;
  outline:none;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 13px;;
  cursor: pointer;
  line-height: 1.1;
  color:#312f45;

  background-color: #d5d5f5;
  background-image: linear-gradient(to top, #d5d5f5, #d5d5f5 33%);

`;

export const Layout = styled.div`
  background: transparent;
  display: flex;
  align-items: flex-end;

  justify-content: center;
  padding: 20px;
  flex-direction: row;

`;
export const LayoutACT= styled.div`
  background: transparent;
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 20px;
  flex-direction: row;
  border-radius:5px;
  box-shadow: #6A79E2 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 2px 2px -3px,
    rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
`;
export const Btn = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  height: 46px;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;

export const Input = styled.input`

display:flex;
  font-family: "Poppins", sans-serif;
  font-siz: 30px;
  margin-left: 10px;
  color: #D9D9D9;
 font-weight : 600;
  height: 30px;
  width: 20vw;
  border: none;
  background: transparent;
  outline: none;
  &:active {
    border: none;
    outline: none;
  }
  placeholder {
    color: #FFF;
  }
`;

export const Div = styled.div`
display: flex;
height: 40px;
width: 40px;
justify-content: center;

align-items: center;
background: transparent;
border-radius: 50%;

box-shadow: #1CABC9 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;


`

export const Svg = styled.div`


margin-left: 10px;
  display: flex;
  height: 30px;
  width: 30px;
  align-items: center;
  cursor: pointer;

  &:hover {
    color:#1CABC9;
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
