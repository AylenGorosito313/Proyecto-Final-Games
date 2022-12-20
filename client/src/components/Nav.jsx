import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import Logout from "../svg/Logout";
import "./Styleds/Nav-bar.css";
import Config from "../svg/Config"
import Home from "../svg/Home";
import Tienda from "../svg/Tienda";
import Perfil from "../svg/Perfil";
function Nav() {
  return (
    <div className="div-padre-nav">
      <div className="div-Nav-bar">
        <nav className="nav">
          <Logo />
          <div className="div-icons-nav">
            <Home/>
            <Link className="Link" to={"/home"}>
              Home
            </Link>
          </div>

          <div className="div-icons-nav">
            <Perfil />
            <Link className="Link" to={"/profile"}>
              Profile
            </Link>
          </div>
          <div className="div-icons-nav">
            <Tienda/>
            <Link className="Link" to={"/shop"}>
              Shop
            </Link>
          </div>
          <div className="div-icons-nav">
            <Config/>
            <Link className="Link" to={"/settings"}>
            
              Settings
            </Link>
          </div>

          <div className="div-icons-nav">
            <Logout />
            <Link className="Link" to={"/"}>
              Logout
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
{
  /* 
<Link>Car</Link>
<Link>Notificaciones</Link> */
}
