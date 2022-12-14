import { Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {


  return (
 <>
   <Route exact path="/">
        < Home />
      </Route>
 </>
  )
}

export default App
