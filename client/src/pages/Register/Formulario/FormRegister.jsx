import React from "react";
import { useForm } from "react-hook-form";
import "./FormRegister.css";
import { equalPass } from "./utils/equalPass";
function FormRegister() {
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
      lastname: "",
      repeatpass: "",
    },
    mode: "onChange",
    // resolver: yupResolver(LoginFormSchema),
  });


  const OnSubmitRegister = async (data) => {};

  return (

    
    <form className="form">
      <label className="label">Name</label>
      <div className="input-container-register">
        <input
          type="text"
          placeholder="Enter your email..."
          className="input-register"
          {...register("name", {
            maxLength: 30,
            required: true,
          })}
        />
      </div>
      <label className="label">Lastname</label>
      <div className="input-container-register">
        <input
          type="text"
          placeholder="Enter your email..."
          className="input-register"
          {...register("lastname", {
            maxLength: 30,
            required: true,
          })}
        />
      </div>

      <label className="label">Email</label>
      <div className="input-container-register">
        <input
          type="text"
          placeholder="Enter your email..."
          className="input-register"
          {...register("email", {
            maxLength: 30,
            required: true,
            pattern: /\S+@\S+\.\S+/,
          })}
        />
      </div>
      {errors.email?.type === "required" && (
        <p className="p-error-input">'The email is required'</p>
      )}
      {errors.email?.type === "maxLength" && (
        <p className="p-error-input">'The email is too long'</p>
      )}
      {errors.email?.type === "pattern" && (
        <p className="p-error-input">'The email format is wrong'</p>
      )}
      <label className="label">Password</label>
      <div className="input-container-register">
        <input
          type="password"
          placeholder="Enter your Password..."
          className="input-register"
          {...register("password", {
            maxLength: 12,
            required: true,
            pattern:
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          })}
        />
      </div>
      {errors.password?.type === "required" && (
        <p className="p-error-input">'The passwords required'</p>
      )}
      {errors.password?.type === "maxLength" && (
        <p className="p-error-input">'The password format is wrong'</p>
      )}
      {errors.password?.type === "pattern" && (
        <p className="p-error-input">
          'Must be alphanumeric and contain a maximum of 12 characters, one
          capital letter and one special character'
        </p>
      )}
      <label className="label">Repeat your password</label>
      <div className="input-container-register">
        <input
          type="password"
          placeholder="Repeat your password..."
          className="input-register"
          {...register("repeatpass", {
            maxLength: 12,
            required: true,
            
            pattern:
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          })}
        />
      </div>
      {errors.repeatpass?.type === "required" && (
        <p className="p-error-input">'The passwords required'</p>
      )}
      {errors.repeatpass?.type === "maxLength" && (
        <p className="p-error-input">'The password to long'</p>
      )}
      {errors.repeatpass?.type === "pattern" && (
        <p className="p-error-input">
          'Must be alphanumeric and contain a maximum of 12 characters, one
          capital letter and one special character'
        </p>
      )}
       
      <div className="boton-container-register">
        <button className="button-register">Sign up</button>
      </div>
    </form>
  );
}

export default FormRegister;
