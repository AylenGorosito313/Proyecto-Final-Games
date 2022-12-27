import { useDispatch } from "react-redux";
import "./SelectProfile.css";
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
        <p className="option-name">Profile</p>
      </div>
      <div className="option-container">
        <p className="option-name">Settings</p>
      </div>

      <div className="option-container" onClick={handlerLogout}>
        <p className="option-name">Logut</p>
      </div>
    </div>
    </div>
 
  );
}
