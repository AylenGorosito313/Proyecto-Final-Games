import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchByName } from "../../middleware";
import SearchS from "../../svg/SearchSmall";
import { Layout, ContainerSearch, Input, Btn, Svg, Div } from "./SearchStyled";
import "./Search";
import SignInBtn from "../SignIn/SignInBtn";
export default function Search() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  

  function handleChange(e) {
    console.log(e.target.value);
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchByName(input)); //actualización de atributo
    setInput("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Layout>
          <ContainerSearch>
            <Input
              type="text"
              placeholder="Search an game .."
              value={input}
              onChange={(e) => handleChange(e)}
            />
            <Svg>
              {/* <Div> */}
                <SearchS />
              {/* </Div> */}
            </Svg>
          </ContainerSearch>
          
        </Layout>

      </form>
    </div>
  );
}

//hola aylennn como estas ?
