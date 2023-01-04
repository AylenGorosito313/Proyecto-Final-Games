import { Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentMP from "./pages/Payment/PaymentMP";
import NavTop from "./components/Nav/Nav-top";
import Loginn from "./pages/Login/Loginn";
import Register from "./pages/Register/Register";
import GameCreate from "./pages/GameCreate/GameCreate";
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
    
    </>
  );
}

export default App;
