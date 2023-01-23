import React from "react";
import { useSelector } from "react-redux";
import style from "./CommentInput.module.css";
export default function CommentInput() {
  const { userActual } = useSelector((state) => state.prueba);

  return (
    <>
    <div className={style.layout}>
  
      <form className={style.container}>
        <textarea className={style.input} type="textarea" />
        <button className={style.button}>Comemnt</button>
      </form>
      </div>
    </>
  );
}


