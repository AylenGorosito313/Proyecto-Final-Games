import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LoginButton.module.css";
import Auth0 from "./Auth0";

// export const LoginButton = () => {
// const {loginWithRedirect} = useAuth0()

//   return

export default function LoginButton() {
  const { loginWithPopup } = useAuth0();
  return (
    <div className={style.divDiablos}>
         <button className={style.button} onClick={() => loginWithPopup()}>
      <Auth0 />
      Login with Auth0
    </button>
    </div>
 
  );
}
