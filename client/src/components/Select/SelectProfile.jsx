import { useDispatch } from "react-redux";
import "./SelectProfile.css";
// import Logout from "../../svg/icons-menu/logout";
import Settings from "../../svg/icons-menu/settings";
import Profile from "../../svg/icons-menu/profile";
import { clearState } from "../../reducers/prueba/pruebaSlider";

export default function SelectProfile({ setOpen, setLogin }) {
  const dispatch =useDispatch()
  const handlerLogout = () => {
    setOpen(false);
    localStorage.setItem("token", null);
    setLogin(null);
    dispatch(clearState())
   
  };

  return (
    <div className="select-layout">
   <div className="select-container">
      <div className="option-container">
      <Profile/>  <p className="option-name">  Profile</p>
      </div>
      <div className="option-container">
       < Settings/> <p className="option-name">Settings</p>
      </div>

      <div className="option-container" onClick={handlerLogout}>
      {/* <Logout className="div-icon-menu-perfil" />  */}
        <p className="option-name">Logut</p>
      </div>
    </div>
    </div>
 
  );
}
