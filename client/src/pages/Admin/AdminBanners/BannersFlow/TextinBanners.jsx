import React from "react";
import { useForm } from "react-hook-form";
import style from "./TextBanners.module.css";
export default function TextinBanners({ HandlerText }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { description: "", textBtn: "", name: "" },
    mode: "onChange",
  });
  const OnSubmit = (data) => {
    HandlerText(data);
  };
  const toggleFormText = () => {
    setFrom();
  };
  //title, description, price,logo, textBtn
  return (
    <>
      <form className={style.formContainer} onSubmit={handleSubmit(OnSubmit)}>
        <div className={style.input_group}>
          <label className={style.user_label}>Title</label>
          <input
            type="textBtn"
            placeholder="Enter your title..."
            className={style.input}
            {...register("name", {})}
          />
        </div>
        <div className={style.input_group}>
          <label className={style.user_label}>Description</label>
          <input
            type="text"
            placeholder="Enter your description..."
            className={style.input}
            {...register("description", {})}
          />
        </div>
        <div className={style.input_group}>
          <label className={style.user_label}>text for buttonn</label>
          <input
            type="textBtn"
            placeholder="Enter your text"
            className={style.input}
            {...register("textBtn", {})}
          />
        </div>
        <div className={style.divBTN}>
          <button className={style.btn}> Add </button>
        </div>
      </form>
    </>
  );
}
