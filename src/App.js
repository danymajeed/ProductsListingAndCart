import React from "react";
import Home from "./components/HomePage";
import Cart from "./components/CartPage";
import Navbar from "./components/navbar";

import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
