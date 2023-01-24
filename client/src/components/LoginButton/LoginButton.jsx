import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LoginButton.module.css"
// export const LoginButton = () => {
// const {loginWithRedirect} = useAuth0()

//   return
// };

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return <button className={style.button} onClick={() => loginWithRedirect()}>Login with Auth0</button>;
}
