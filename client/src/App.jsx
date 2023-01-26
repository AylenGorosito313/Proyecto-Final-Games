import { Route, Switch } from "react-router-dom";
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
import ProfilePage from "./pages/UserProfile/Profile/ProfilePage";
import Proveedor from "./pages/ProveedorProfile/Proveedor";
import GameDevForm from "./pages/GameDevForm/GameDevForm";
import ViewAdmin from "./pages/Admin/ViewAdmin";
import Footer from "./components/Footer/Footer";
import ProveedorProfile from "./pages/ProveedorProfile/Profile/ProveedorProfile";
import Page404 from "./components/Page404/Page404";
//admins import

import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminUser from "./pages/Admin/AdminUsuario/AdminUsuario";
import AdminGames from "./pages/Admin/AdminGames/AdminGames";
import AdminBanners from "./pages/Admin/AdminBanners/AdminBanners";
import AdminSettings from "./pages/Admin/AdminSettings/AdminSettings";
function App() {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
  return (
    <>
      <Switch>
        {/* <Route exact path="/user"> */}
        <Route exact path="/user/login" component={Loginn} />
        <Route exact path="/user/register" component={Register} />
        {/* <Route exact path="/user/recuperacion" component={UserRecuperacion} /> */}
        {/* </Route> */}

        <Route exact path={"/payment"}>
          <NavTop />
          {/* <Route exact path="/payment" component={NavTop} /> */}
          <Route path="/payment" component={PaymentMP} />
        </Route>

        <Route exact path="/payment/success" component={SuccessPay} />

        <Route exact path="/">
          <NavTop />
          <Route exact path="/" component={Homepage} />
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

        <Route exact path="/user/profil">
          <NavTop />
          <Route path="/user/profil" component={ProfilePage} />
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
        <Route path="/panelView">
          <NavTop />
          <ViewAdmin />
        </Route>

        <Route path="/admin">
          <Route path="/admin" component={NavTop} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/users" component={AdminUser} />
          <Route exact path="/admin/games" component={AdminGames} />
          <Route exact path="/admin/banners" component={AdminBanners} />
          <Route exact path="/admin/settings" component={AdminSettings} />
        </Route>
        <Route path="/provedor">
          <NavTop />
          <Route exact path="/provedor/unpload" component={UnploadGame} />
          <Route exact path="/provedor/profile" component={ProveedorProfile} />
        </Route>

        <Route path="*" component={Page404} />
      </Switch>
    </>
  );
}

export default App;
