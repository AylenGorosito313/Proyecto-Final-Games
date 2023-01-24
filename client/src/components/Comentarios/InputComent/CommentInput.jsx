import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CommentInput.module.css";
import { addComments } from "../../../middleware";
import { useForm } from "react-hook-form";
import { modGameDetails } from "../../../middleware";
export default function CommentInput({ id, img }) {
  const { userActual } = useSelector((state) => state.prueba);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      comment: "",
    },
    mode: "onChange",
  });
let UserId = localStorage.getItem('id')
  const handlerSubmit = async (data) => {
    let gameId = id;
    let userId = localStorage.getItem("id");
    let coment = data.comment;
    let comentarios = {
      autor: UserId,
      coment: coment,
      profile: img,
    }
    dispatch(modGameDetails(comentarios));
    dispatch(addComments(coment, userId, gameId));
  };
  return (
    <>
      <div className={style.layout}>
        <form
          onSubmit={handleSubmit(handlerSubmit)}
          className={style.container}
        >
          <textarea
            className={style.input}
            type="textarea"
            {...register("comment", {
              required: true,
            })}
          />
          {errors.description?.type === "required" && (
            <p className={style.errors}>The name is required</p>
          )}
          <button className={style.button}>Comemnt</button>
        </form>
      </div>
    </>
  );
}
