import React from "react";
import style from "./Coments.module.css"
import CommentInput from "./InputComent/CommentInput";
export default function Coments() {
  return (
    <div className={style.layout}>
     <CommentInput/>
    </div>
  );
}
