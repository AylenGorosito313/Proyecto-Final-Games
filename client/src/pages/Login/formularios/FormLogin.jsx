import React from "react";
import "../css/Login.css";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginUser } from "../../../middleware";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
function FormLogin() {
  const { res } = useSelector((state) => state.prueba);
  const navigate = useHistory()
  const dispatch = useDispatch()
  const {
    register, handleSubmit,watch, formState: { errors },} = useForm({ defaultValues: { email: "", password: "" },mode: "onChange", });




    

  const OnSubmit = async (data) => {
    console.log(data);
    dispatch(LoginUser(data));
  //   if(res.login.token){
  //  navigate.push('/')
  //   }
 
  };
  return (
    <>
      <form onSubmit={handleSubmit( OnSubmit)} className="form">
        <label className="label">Email</label>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your email..."
            className="input"
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
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter your Password..."
            className="input"
            {...register("password", {
              maxLength: 12,
              required: true,
              pattern:
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            })}
          />
        </div>
        {errors.password?.type === "required" && (
          <p className="p-error-input">'The passwordis required'</p>
        )}
        {errors.password?.type === "maxLength" && (
          <p className="p-error-input">'The passwordformat is wrong'</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="p-error-input">
            'Must be alphanumeric and contain a maximum of 12 characters, one
            capital letter and one special character'
          </p>
        )}

        <div className="div-link-checkbox">
          <div className="checkbox-container">
            <input type="checkbox" {...register("checkbox-remember")} />
            <label className="label"> Remember me</label>
          </div>
          <Link className="link" to={"/recuperacion"}>
            <p>Forgot Password ?</p>
          </Link>
        </div>
        {/* */}
        <div className="boton-container">
          <div className="field button_field">
            <button  type="submit">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormLogin;

{
  /* <div className="form_link">
          <span>
            <label>
              <input type="checkbox" id="remember_user" name="remember_user" />
              Remember me
            </label>
            <a href="#" className="forgot_pass">
              Forgot Password?
            </a>
          </span>
        </div> */
}
