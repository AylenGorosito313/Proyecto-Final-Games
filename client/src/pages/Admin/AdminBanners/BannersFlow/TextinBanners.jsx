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
  const OnSubmit = async (data) => {
    console.log(data);
    HandlerText(data);
  };
  //title, description, price,logo, textBtn
  return (
    <>
      <form className={style.formContainer} onSubmit={handleSubmit(OnSubmit)}>
        <div className={style.input_group}>
          <label className={style.user_label}>Tile</label>
          <input
            type="textBtn"
            placeholder="Enter your email..."
            className={style.input}
            {...register("name", {})}
          />

          <label className={style.user_label}>Description</label>
          <input
            type="text"
            placeholder="Enter your email..."
            className={style.input}
            {...register("description", {})}
          />

          <label className={style.user_label}>text for Btn</label>
          <input
            type="textBtn"
            placeholder="Enter your email..."
            className={style.input}
            {...register("textBtn", {})}
          />
        </div>

        <button> Add </button>
      </form>
    </>
  );
}

{
  /* <div class="input-group">
  <input required="" type="text" name="text" autocomplete="off" class="input">
  <label class="user-label">First Name</label>
</div> */
}
