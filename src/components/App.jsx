import React, { useState } from "react";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Navbar from "./NavBar/Navbar"
import products from "../products"
import Product from "./Products/Product"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {products.map((products) => <Product key={products.key} name={products.name} imgURL={products.imgURL} price={products.price} />)}
      <Footer />
    </div>
  );
}

export default App;
