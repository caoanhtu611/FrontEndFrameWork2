import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./layout/Client";
import ProductList from "./pages/client/productList/ProductList";
import HomePage from "./pages/client/home/HomePage";
import { useState } from "react";
import Slider from "./components/Slider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Client}>
            <Route path={""} Component={HomePage} />
            <Route path={""} Component={Slider} />
            <Route path={"productlist"} Component={ProductList} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
