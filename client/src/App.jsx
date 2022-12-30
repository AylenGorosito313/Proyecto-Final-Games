import { Route } from "react-router-dom";
import Home from "./pages/Home";
import NavPrueba from "./components/Nav/NavPrueba";
import NavTop from "./components/Nav/Nav-top";
import Loginn from "./pages/Login/Loginn";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <Route exact path="/login">
        <Loginn />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <NavTop />
      
        <Home />
      </Route>

      <Route exact path="/pruebas">
      < NavPrueba/>
      </Route>
    </>
  );
}

export default App;
