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
import CardDetail from "./pages/CardDetail/CardDetail";
import SuccessPay from "./pages/Payment/SuccessPay/SuccessPay";
import axios from "axios";
function App() {
    axios.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    return (
        <>
            <Route exact path="/games/:id">
                <NavTop />
                <CardDetail />
            </Route>

            <Route exact path="/payment/success">
                <SuccessPay />
            </Route>

            <Route exact path="/payment">
                <NavTop />

                <PaymentMP />
            </Route>

            <Route exact path="/login">
                <Loginn />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/game/create">
                <GameCreate />
            </Route>
            <Route exact path="/">
                <NavTop />
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/game/create" component={GameCreate} /> */}
                <Route exact path="/game/:id" component={CardDetail} />
            </Route>
            <Route path="/profile" component={NavProfile} />
            <Route exact path="/profile/profile" component={Profile} />
            <Route exact path="/profile/games" component={MyGames} />
            <Route exact path="/profile/favorite" component={Favorite} />
        </>
    );
}

export default App;
