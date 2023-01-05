import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import PaymentMP from "./pages/Payment/PaymentMP";
import NavTop from "./components/Nav/Nav-top";
import Loginn from "./pages/Login/Loginn";
import Register from "./pages/Register/Register";
import GameCreate from "./pages/GameCreate/GameCreate";
import CardDetail from "./pages/CardDetail/CardDetail";
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
      <Route exact path="/register">
        <Register />
      </Route>
      <Route path="/">
        <NavTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/game/create" component={GameCreate} />
        <Route exact path="/game/:id" component={CardDetail} />
      </Route>
    
    </>
  );
}

export default App;
