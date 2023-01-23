import React from "react";
import { useSelector } from "react-redux";
import style from "./CommentInput.module.css";
export default function CommentInput() {
  const { userActual } = useSelector((state) => state.prueba);

  return (
    <>
    <div className={style.layout}>
      {/* <div className={style.userIcon}>
        <div className={style.divAvatar}>
          <img
            className={style.img}
            src={
              userActual.profile_img
                ? userActual.profile_img
                : "https://cdn-icons-png.flaticon.com/512/1361/1361876.png"
            }
            alt="ImgProfile"
            width="100px"
            height="100px"
          />
        </div>
      </div> */}
      <form className={style.container}>
        <textarea className={style.input} type="textarea" />
        <button className={style.button}>Comemnt</button>
      </form>
      </div>
    </>
  );
}

// <div className={style.divAvatar}>
// <img
//   className={style.img}
//   src={
//     userActual.profile_img
//       ? userActual.profile_img
//       : "https://cdn-icons-png.flaticon.com/512/1361/1361876.png"
//   }
//   alt="ImgProfile"
//   width="200px"
//   height="200px"
// />
// </div>

// <div className={style.divAvatar}>
//   {userActual.name
//     ? `Hello, ${userActual.name}!`
//     : ""}
