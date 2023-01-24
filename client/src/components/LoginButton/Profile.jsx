import React from "react";
import Auth0 from "./Auth0";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import style from "./ProfileAuth0.module.css";
export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user, isAuthenticated, isLoading );


  if (isLoading) {
    return <div>Loading...</div>;
  }
// if(isAuthenticated){
//     navigate.push('/home')
// }


  return (
    <div>
      {isAuthenticated && (
        <div className={style.div_icon}>
          <img className={style.img} src={user.picture} alt={user.name} />
         <p className={style.p_profile}>{user.nickname}</p>
        </div>
      )}
    </div>
  );
}
