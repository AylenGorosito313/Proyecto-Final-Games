import { Link } from "react-router-dom";
import Logo from "../../svg/Logo";
import Logout from "../../svg/Logout";
import "./Nav-bar.css";
import Config from "../../svg/Config";
import Home from "../../svg/Home";
import Tienda from "../../svg/Tienda";
import Perfil from "../../svg/Perfil";
import Androme from "../../svg/Androme";


function Nav() {
  return (
    <div className="div-padre-nav">
      {/* <div className="div-Nav-bar">  */}
    
        <nav className="nav">
          <div className="div-logo">
            {/* <Logo /> */}
            {/* <Androme /> */}
          </div>


          <div className="div-icons-nav">
            <Home />
            <Link className="Link" to={"/home"}>
            <p className="p">Home</p> 
            </Link>
          </div>




          <div className="div-icons-nav">
            <Perfil />
            <Link className="Link" to={"/profile"}>
             <p className="p">Profile</p> 
            </Link>
          </div>
          <div className="div-icons-nav">
            <Tienda />
            <Link className="Link" to={"/shop"}>
             <p className="p">Shop</p> 
            </Link>
          </div>
          ///////////////////////////////////////////////////////////
          <div className="deiv-set-out">
            <div className="div-icons-nav">
              <Config />
              <Link className="Link" to={"/settings"}>
               <p className="p">Settings</p> 
              </Link>
            </div>

            <div className="div-icons-nav">
              <Logout />
              <Link className="Link" to={"/"}>
               <p className="p">Logout</p> 
              </Link>
            </div>
          </div>
        </nav>
      </div>
    // </div>
  );
}

export default Nav;
{
  /* 
<Link>Car</Link>
<Link>Notificaciones</Link> */
}
