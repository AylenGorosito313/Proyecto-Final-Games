import React from "react";
import style from "./AdminLogin.module.css";
import LogoAdminLogin from "../AdminSvg/LogoAdminLogin";
import { useForm } from "react-hook-form";
import { LoginAdmin } from "../../../middleware";
import { useDispatch } from "react-redux";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { mail: "", password: "" }, mode: "onChange" });

  const OnSubmit = async (data) => {
    console.log(data);
    dispatch(LoginAdmin(data));
  };

  return (
    <>
      <div className={style.Layout}>
        <div className={style.contairner_Login}>
          <div className={style.contLogin}>
            <div className={style.Logo_admin_login}>
              <LogoAdminLogin />
            </div>
            <form onSubmit={handleSubmit(OnSubmit)} className={style.formLogin}>
              <div className={style.form__group}>
                <input
                  type="text"
                  className={style.form__field}
                  placeholder="Input text"
                  {...register("mail", {
                    // maxLength: 100,
                    // required: true,
                    // pattern: /\S+@\S+\.\S+/,
                  })}
                />
                <label className={style.form__label}> Email </label>
              </div>
              {/* {errors.email?.type === "required" && (
                <p className={style.p_error_input}>'The email is required'</p>
              )}
              {errors.email?.type === "maxLength" && (
                <p className={style.p_error_input}>'The email is too long'</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className={style.p_error_input}>
                  'The email format is wrong'
                </p>
              )} */}
              <div className={style.form__group}>
                <input
                  type="password"
                  className={style.form__field}
                  placeholder="Input text"
                  {...register("password", {
                    // maxLength: 12,
                    required: true,
                    // pattern:
                    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                  
                    })}
                />
                {errors.password?.type === "required" && (
                  <p className={style.p_error_input}>
                    'The passwordis required'
                  </p>
                )}
                {/* {errors.password?.type === "maxLength" && (
                  <p className={style.p_error_input}>
                    'The passwordformat is wrong'
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className={style.p_error_input}>
                    the password formt must be Example31#
                  </p>
                )} */}
                <label className={style.form__label}> Password </label>
              </div>
              <button className={style.button}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
