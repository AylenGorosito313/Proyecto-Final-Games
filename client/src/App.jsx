import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Homepage from "./pages/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
import UnploadGame from "./pages/ProveedorProfile/UnploadGame/UnploadGame";
import PaymentMP from "./pages/Payment/PaymentMP";
import NavTop from "./components/Nav/Nav-top";
import Loginn from "./pages/Login/Loginn";
import Register from "./pages/Register/Register";
import GameCreate from "./pages/GameCreate/GameCreate";
import NavProfile from "./pages/UserProfile/NavProfile/NavProfile";
import Profile from "./pages/UserProfile/Profile/Profile";
import MyGames from "./pages/UserProfile/MyGames/MyGames";
import Favorite from "./pages/UserProfile/Favorite/Favorite";
import Settings from "./pages/UserProfile/Settings/Settings";
import CardDetail from "./pages/CardDetail/CardDetail";
import SuccessPay from "./pages/Payment/SuccessPay/SuccessPay";
import Examinar from "./pages/Examinar/Examinar";
import axios from "axios";
import ProfilePage from "./pages/UserProfile/Profile/ProfilePage"
import Proveedor from "./pages/ProveedorProfile/Proveedor";
import GameDevForm from "./pages/GameDevForm/GameDevForm";
import ViewAdmin from "./pages/Admin/ViewAdmin";
import Footer from "./components/Footer/Footer";
import ProveedorProfile from "./pages/ProveedorProfile/Profile/ProveedorProfile";

function App() {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
  return (
    <>
      <Route path="/user">
        <Route exact path="/user/login" component={Loginn} />
        <Route exact path="/user/register" component={Register} />
        {/* <Route exact path="/user/recuperacion" component={UserRecuperacion} /> */}
      </Route>

      <Route exact path="/payment" component={NavTop} />
      <Route exact path="/payment" component={PaymentMP} />
      <Route exact path="/payment/success" component={SuccessPay} />

      <Route path="/home">
        <NavTop />
        <Route exact path="/home" component={Homepage} />
        <Footer />
      </Route>

      <Route path="/game">
        <NavTop />
        <Route exact path="/game/examinar/filtros" component={Examinar} />
        <Route exact path="/game/form/create" component={GameCreate} />
        <Route exact path="/game/:id" component={CardDetail} />
        <Route exact path="/game/dev/form" component={GameDevForm} />
        <Footer />
      </Route>
    
      <Route exact path="/user">
      <NavTop />
          <Route path="/user" component={ProfilePage} />
          <Footer />
      </Route>

      <Route path="/profile">
        <NavTop />
     
        {/* <Route exact path="/profile/profile" component={Profile} /> */}
        <Route exact path="/profile/games" component={MyGames} />
        <Route exact path="/profile/favorite" component={Favorite} />
        <Route exact path="/profile/settings" component={Settings} />
        <Footer />
      </Route>

      <Route exact path="/proveedor">
        <Proveedor />
      
      </Route>
      <Route exact path="/admin">
      <NavTop />
     
        <ViewAdmin />
      
      </Route>


      <Route exact path="/provedor/unpload" component={UnploadGame} />
      <Route exact path="/provedor/profile" component={ProveedorProfile} />
    
      
    </>
  );
}

export default App;
