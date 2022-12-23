import { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import NavTop from "./components/Nav/Nav-top";
import Loginn from "./pages/Login/Loginn";
function App() {
  return (
    <>
      <Route path="/login">
        <Loginn />
      </Route>
      <Route path="/">
        {/* <NavTop />
        <Nav /> */}
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
}

export default App;
