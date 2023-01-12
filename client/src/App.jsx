import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
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
import axios from "axios";
import Proveedor from "./pages/ProveedorProfile/Proveedor";


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
        <Route exact path="/home" component={Home} />
      </Route>

      <Route path="/game">
        <NavTop />
        <Route exact path="/game/form/create/submit" component={CreateSuccess}/>
        <Route exact path="/game/form/create" component={GameCreate} />
        <Route exact path="/game/:id" component={CardDetail} />
      </Route>

      <Route path="/profile">
        <NavTop />
        <Route path="/profile" component={NavProfile} />
        <Route exact path="/profile/profile" component={Profile} />
        <Route exact path="/profile/games" component={MyGames} />
        <Route exact path="/profile/favorite" component={Favorite} />
        <Route exact path="/profile/settings"  component={Settings} />
      </Route>

      <Route exact path="/proveedor">
                <Proveedor/>
        </Route> 
    </>
  );
}

export default App;
