import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import "./Styleds/Nav-bar.css";
function Nav() {
  return (
    <div className="div-padre-nav">
      <div className="div-Nav-bar">
        <nav className="nav">
          <Logo />
          <Link to={"/home"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/shop"}>Shop</Link>

          {/* 
<Link>Car</Link>
<Link>Notificaciones</Link> */}

          <Link to={"/settings"}>Settings</Link>
          <Link to={"/"}>Logout</Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
