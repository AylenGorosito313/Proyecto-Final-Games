import { useDispatch } from "react-redux";
import "./SelectProfile.css";
import DeveloperIcon from "../../svg/icons-menu/Developer-Icon";
import Logout from "../../svg/icons-menu/Logout";
import Settings from "../../svg/icons-menu/Settings";
import Profile from "../../svg/icons-menu/Profile";
import { clearState } from "../../reducers/prueba/pruebaSlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function SelectProfile({ setOpen, setLogin }) {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const handlerLogout = () => {
    setLogin(false);
    setOpen(false);
    logout();
    localStorage.clear();

    dispatch(clearState());
  };

  let Idpovider = false;
  let id = localStorage.getItem("proveedor");

  if (id) Idpovider = true;

  console.log(Idpovider);

  return (
    <motion.div
      className="select-layout"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.4,
        ease: "backOut",
      }}
    >
      <div className="select-container">
        <div className="option-container">
          <div>
            <Profile />
          </div>
          <Link className="Link-select" to={"/user/profil"}>
            <p className="option-name"> Profile</p>
          </Link>
        </div>

        <div className="option-container">
          <div>
           
              <Settings />
           
          </div>
          <Link  className="Link-select" to={"/profile/settings"}>
          <p className="option-name">Settings</p>
          </Link>
        </div>

        {Idpovider ? (
          <div className="option-container">
            <div>
              <DeveloperIcon />
            </div>{" "}
            <Link className="Link-select" to={"/game/form/create"}>
              <p className="option-name"> Unpload Game </p>
            </Link>
          </div>
        ) : (
          <div className="option-container">
            <div>
              <DeveloperIcon />
            </div>{" "}
            <Link className="Link-select" to={"/proveedor"}>
              <p className="option-name">Be Developer </p>
            </Link>
          </div>
        )}

        <div className="option-container" onClick={handlerLogout}>
          <div>
            <Logout className="div-icon-menu-perfil" />
          </div>{" "}
          <p className="option-name">Logut</p>
        </div>
      </div>
    </motion.div>
  );
}
{
  /* <div className="select-container">
        {Idpovider ? (
          <div className="option-container">
            <div>
              <Profile />
            </div>
            <Link className="Link-select" to={"/provedor/profile"}>
              <p className="option-name"> Profile</p>
            </Link>
          </div>
        ) : (
          // <div className="option-container">
          //   <div>
          //     <Profile />
          //   </div>{" "}
          //   <Link className="Link-select" to={"/user"}>
          //     <p className="option-name"> Profile</p>
          //   </Link>
          // </div>
        )} */
}
