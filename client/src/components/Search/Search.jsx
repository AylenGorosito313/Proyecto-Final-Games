import React from 'react'
import{useState} from "react";
import { useDispatch} from "react-redux";
import { getSearchByName } from '../../middleware';

export default function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
 

  function handleChange(e) {
      e.preventDefault()
      setInput(e.target.value); 
      console.log(input)
     
  }

  function handleSubmit(e) {
      e.preventDefault();
      dispatch(getSearchByName(input)); //actualización de atributo
      setInput("");
  } 

  return (
      <div>
          <form onSubmit={(e) => handleSubmit(e)}>
              <input  type="text" placeholder="Search a recipe...🔎" value={input} onChange={(e) => handleChange(e)} />
              <button  type="submit">Search</button>
          </form> 
      </div>
  ); 

}