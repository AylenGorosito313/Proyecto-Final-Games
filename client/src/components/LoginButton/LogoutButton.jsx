import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LoginButton.module.css"
import Auth0 from "./Auth0";
// export const LoginButton = () => {
// const {loginWithRedirect} = useAuth0()

//   return
// };

export default function LogoutButton() {
  const {logout } = useAuth0();
  return <button className={style.buttonLoguot } onClick={() => logout({returnTo:'/user/login'})}>Loguot Auth0</button>;
}
