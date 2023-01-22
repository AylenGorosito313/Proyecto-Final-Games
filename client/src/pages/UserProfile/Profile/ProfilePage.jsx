import React from "react";
import NavProfile from "../NavProfile/NavProfile";
import style from "./ProfilePage.module.css";
import Profile from "./Profile";
export default function infoProfile() {
  return (
    <div className={style.LayoutProfilePage}>
       <div className={style.containerData}>
              <NavProfile />
              <Profile />
       </div>
    </div>
    
  );
}
