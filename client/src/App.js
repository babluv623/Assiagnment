import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutMe from "./components/AboutMe";
import ProductScreen from "./ProductScreen";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/product/:id"
          render={(props) => <ProductScreen {...props} />}
        />

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
      </Container>
    </>
  );
}

export default App;
