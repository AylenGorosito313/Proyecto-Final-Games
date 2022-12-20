import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav"
import NavTop from "./components/Nav/Nav-top";
function App() {


  return (
 <>
  <Route  path="/">
    <NavTop/>
        < Nav />
      </Route>
   <Route exact path="/">
        < Home />
      </Route>
 </>
  )
}

export default App
