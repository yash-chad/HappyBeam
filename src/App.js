import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import Modal from "./Components/Modal";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route exact path="/" component={ProductList}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    </div>
  );
}

export default App;
