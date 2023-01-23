import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CommentInput.module.css";
export default function CommentInput() {
  const { userActual } = useSelector((state) => state.prueba);
   const dispatch =useDispatch()

   const handlerSubmit = (data)=>{
    dispatch((data))
   }
  return (
    <>
    <div className={style.layout}>
  
      <form onSubmit={handlerSubmit} className={style.container}>
        <textarea className={style.input} type="textarea" />
        <button className={style.button}>Comemnt</button>
      </form>
      </div>
    </>
  );
}


