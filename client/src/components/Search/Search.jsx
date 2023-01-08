import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchByName } from "../../middleware";
import SearchS from "../../svg/SearchSmall";
import { Layout, ContainerSearch, Input, Svg, Div } from "./SearchStyled";
import "./Search";

export default function Search() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchByName(input)); //actualización de atributo
    setInput("");
  }

  return (
    <div className="div-search">
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
