import { useDispatch } from "react-redux";
import "./SelectProfile.css";
import Logout from "../../svg/icons-menu/Logout";
import Settings from "../../svg/icons-menu/Settings";
import Profile from "../../svg/icons-menu/Profile";
import { clearState } from "../../reducers/prueba/pruebaSlider";
import { motion } from "framer-motion";
export default function SelectProfile({ setOpen, setLogin }) {
  const dispatch = useDispatch();
  const handlerLogout = () => {
    setOpen(false);
    localStorage.setItem("token", null);
    setLogin(null);
    dispatch(clearState());
  };

  return (
    <motion.div
      className="select-layout"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "backOut",
      }}
    >
      <div className="select-container">
        <div className="option-container">
          <Profile /> <p className="option-name"> Profile</p>
        </div>
        <div className="option-container">
          <Settings /> <p className="option-name">Settings</p>
        </div>

        <div className="option-container" onClick={handlerLogout}>
          <Logout className="div-icon-menu-perfil" />{" "}
          <p className="option-name">Logut</p>
        </div>
      </div>
    </motion.div>
  );
}
