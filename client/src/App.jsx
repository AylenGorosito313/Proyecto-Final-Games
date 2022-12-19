import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav"

function App() {


  return (
 <>
  <Route  path="/">
        < Nav />
      </Route>
   <Route exact path="/">
        < Home />
      </Route>
 </>
  )
}

export default App
