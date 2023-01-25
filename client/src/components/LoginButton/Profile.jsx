import React from "react";
import Auth0 from "./Auth0";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser, LoginUser } from "../../middleware";
import style from "./ProfileAuth0.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user && user.picture);
  const dispatch = useDispatch();

  useEffect(() => {
    let data = {
      email: user && user.email,
      password: "Telefono31#",
      name: user && user.nickname,
      lastName: user && user.nickname,
      profile_img: user && user?.picture,
      Auth: true,
    };
    if (user) {
      dispatch(LoginUser(data));
    }
  }, [isAuthenticated && isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
