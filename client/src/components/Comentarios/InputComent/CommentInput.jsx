import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CommentInput.module.css";
import { addComments } from "../../../middleware";
import { useForm } from "react-hook-form";
export default function CommentInput({ id }) {
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

  const handlerSubmit = async (data) => {
    let gameId = id;
    let userId = localStorage.getItem("id");
let coment = data.comment
    console.log(coment, userId, gameId);
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
