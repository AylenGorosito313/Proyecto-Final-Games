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
import Favorite from "./pages/UserProfile/Favorite/Favorite"



function App() {
  return (
    <>

<Route exact path="/payment">
        <NavTop />
      
        <PaymentMP />
      </Route>

      <Route exact path="/login">
        <Loginn />
      </Route>
      <Route exact path="/game/create">
        <GameCreate />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <NavTop />
        <Home />
      </Route>
      <Route path='/profile' component={NavProfile}/>
      <Route exact path='/profile/profile' component={Profile}/>
      <Route exact path='/profile/games' component={MyGames}/>
      <Route exact path='/profile/favorite' component={Favorite}/>
    </>
  );
}

export default App;
