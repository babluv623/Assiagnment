import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutMe from "./components/AboutMe";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/AboutMe">
        <AboutMe />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/Signup">
        <Signup />
      </Route>
    </>
  );
}

export default App;
