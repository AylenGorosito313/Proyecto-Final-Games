import React from "react";
import { useForm } from "react-hook-form";
import "./FormRegister.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../../middleware";
function FormRegister() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      lastName: ""
    },
    mode: "onChange",
  });

  const OnSubmitRegister = async (data) => {
    console.log(data);
    dispatch(createUser(data));
  };

  return (
    <form className="form" onSubmit={handleSubmit(OnSubmitRegister)}>
      <label className="label">Name</label>
      <div className="input-container-register">
        <input
          type="text"
          placeholder="Enter your name..."
          className="input-register"
          {...register("name", {
            minLength: 5,
            maxLength: 20,
            required: true,
            pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
          })}
        />
      </div>
      {errors.name?.type === "minLength" && (
        <p className="p-error-input">The name is too short</p>
      )}
      {errors.name?.type === "required" && (
        <p className="p-error-input">The name is required</p>
      )}
      {errors.name?.type === "maxLength" && (
        <p className="p-error-input">The name is too long</p>
      )}
      {errors.name?.type === "pattern" && (
        <p className="p-error-input">
          The name format is wrong , letters, numbers, hyphen and underscore
        </p>
      )}
      <label className="label">Lastname</label>
      <div className="input-container-register">
        <input
          type="text"
          placeholder="Enter your lastname..."
          className="input-register"
          {...register("lastName", {
            minLength: 5,
            maxLength: 20,
            required: true,
            pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
          })}
        />
      </div>
      {errors.lastname?.type === "minLength" && (
        <p className="p-error-input">The lastname is to short</p>
      )}
      {errors.lastname?.type === "required" && (
        <p className="p-error-input">The lastname is required</p>
      )}
      {errors.lastname?.type === "maxLength" && (
        <p className="p-error-input">The lastname is too long</p>
      )}
      {errors.lastname?.type === "pattern" && (
        <p className="p-error-input">
          The name format is wrong , letters, numbers, hyphen and underscore
        </p>
      )}
      <label className="label">Email</label>
      <div className="input-container-register">
        <input
          type="text"
          placeholder="Enter your email..."
          className="input-register"
          {...register("email", {
            minLength: 5,
            maxLength: 100,
            required: true,
            pattern: /\S+@\S+\.\S+/,
          })}
        />
      </div>
      {errors.email?.type === "required" && (
        <p className="p-error-input">The email is required</p>
      )}
      {errors.email?.type === "maxLength" && (
        <p className="p-error-input">The email is too long</p>
      )}
      {errors.email?.type === "pattern" && (
        <p className="p-error-input">
          The name format is wrong , letters, numbers, hyphen and underscore
        </p>
      )}
      <label className="label">Password</label>
      <div className="input-container-register">
        <input
          type="password"
          placeholder="Enter your Password..."
          className="input-register"
          {...register("password", {
            minLength: 5,
            maxLength: 12,
            required: true,
            pattern:
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          })}
        />
      </div>
      {errors.password?.type === "required" && (
        <p className="p-error-input">The passwords required</p>
      )}
      {errors.password?.type === "minLength" && (
        <p className="p-error-input">The password is to short </p>
      )}
      {errors.password?.type === "maxLength" && (
        <p className="p-error-input">The password format is to long</p>
      )}
      {errors.password?.type === "pattern" && (
        <p className="p-error-input">
          Must be alphanumeric and contain a maximum of 12 characters, one
          capital letter and one special character
        </p>
      )}
      <div className="boton-container-register">
      <button type="submit"  className="button-register" >Sign Up</button>
      </div>
  
    
    </form>
  );
}

export default FormRegister;


{/* <div className="boton-container-register">
<input className="button-register" type="submit" />
<button  type="submit" disabled={errors} className="button-register">
  Sign up
</button>
</div> */}