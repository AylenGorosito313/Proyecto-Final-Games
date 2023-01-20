import React from "react";
import style from "./NavAdmin.module.css";
import LogoPanel from "../AdminSvg/LogoAdmins";
import { Link } from "react-router-dom";
// import icons
import BannerIcon from "../AdminSvg/BannersNav";
import DashboardIcon from "../AdminSvg/DashboardNav";
import GamesIcon from "../AdminSvg/GamesNav";
import SettingsIcon from "../AdminSvg/SettingsNav";
import UserIcon from "../AdminSvg/UserNav";

export default function NavAdmin() {
  return (
    <div className={style.nav}>
      <Link to={"/panelView"} className={style.Link}>
        <div className={style.Logo}>
          <LogoPanel />
        </div>
      </Link>
      <div className={style.MetaContainer}>
        <Link to={"/admin/dashboard"} className={style.Link}>
          <div className={style.container}>
            <DashboardIcon />
            <p className={style.p}>Dashboard</p>
          </div>
        </Link>
        <Link to={"/admin/users"} className={style.Link}>
          <div className={style.container}>
            <UserIcon />
            <p className={style.p}>Admin Usuarios</p>
          </div>
        </Link>
        <Link to={"/admin/games"} className={style.Link}>
          <div className={style.container}>
            <GamesIcon />
            <p className={style.p}>Admin Games</p>
          </div>
        </Link>
        <Link to={"/admin/banners"} className={style.Link}>
          <div className={style.container}>
            <BannerIcon />
            <p className={style.p}>Admin Banners</p>
          </div>
        </Link>
        <Link to={"/admin/settings"} className={style.Link}>
          <div className={style.container}>
            <SettingsIcon />
            <p className={style.p}>Settings</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
