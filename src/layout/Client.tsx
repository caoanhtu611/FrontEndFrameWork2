import React, { createContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import { ProductList } from "../components/ProductList";

export const Count = createContext([0, (e: number) => {}]);
const Client = () => {
  const [count, setCount] = useState(0);
  const menu = ["Home", "About", "Shop", "Contact"];
  return (
    <>
      <Count.Provider value={[count, setCount]}>
        <Header menu={menu} />
        <Slider />
        <ProductList />

        <Footer />
      </Count.Provider>
    </>
  );
};

export default Client;
