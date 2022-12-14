import { Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'

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
