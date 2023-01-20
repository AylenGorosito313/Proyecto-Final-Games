import React from "react";
import { useForm } from "react-hook-form";
import  style from "./TextBanners.module.css"
export default function TextinBanners({ HandlerText}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { description: "", textBtn: "" ,name:""},
    mode: "onChange",
  });
  const OnSubmit = async (data) => {
    console.log(data);
    HandlerText(data)
    

  };
  //title, description, price,logo, textBtn
  return (
    <>
      <form  className={style.formContainer} onSubmit={handleSubmit( OnSubmit)} >

      <label>Tile</label>
        <input
          type="textBtn"
          placeholder="Enter your email..."
          className={style.input}
          {...register("name", {
          
          })}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Enter your email..."
          className={style.input}
          {...register("description", {
         
          })}
        />
 
     <label>text for Btn</label>
        <input
          type="textBtn"
          placeholder="Enter your email..."
          className={style.input}
          {...register("textBtn", {
          
          })}
        />
        <button> Add </button>
      </form>
    </>
  );
}
