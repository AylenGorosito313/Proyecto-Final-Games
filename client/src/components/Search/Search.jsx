import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchByName } from "../../middleware";

import Style from "./Search.module.css";

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
    <div className={Style.search_container}>
      <form onSubmit={(e) => handleSubmit(e)}>
      
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search for a game" 
            className={Style.search_input} 
            value={input}
            onChange={(e) => handleChange(e)}
            />
          
      </form>
    </div>
  );
}

