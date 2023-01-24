import React from "react";
import Auth0 from "./Auth0";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { createUser } from "../../middleware";
import style from "./ProfileAuth0.module.css";
import { useDispatch } from "react-redux";
export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);

  const dispatch =useDispatch()
if(user){
    let data = {
  email: user.email,
  password: "Telefono31#",
  name: user.nickname,
  lastName: user.nickname,
  profile_img: user.picture
};
}


  if (isLoading) {

    return <div>Loading...</div>;
  }
  // if(isAuthenticated){
      
  //       dispatch(createUser(data));
  
  // }

  return (
    <div>
      {/* {isAuthenticated && (
        <div className={style.div_icon}>
          <img className={style.img} src={user.picture} alt={user.name} />
          <p className={style.p_profile}>{user.nickname}</p>
        </div>
      )} */}
    </div>
  );
}
