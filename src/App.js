import React, { useState } from "react";
import { Route } from "react-router-dom";

import Products from "./components/Products";
// Bileşenler
import Navigation from "./components/Navigation";

import ShoppingCart from "./components/ShoppingCart";

import ProductContextProvider from './contexts/ProductContext';

function App() {
  
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
  };

  return (
    <ProductContextProvider>
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products /*products={products} addItem={addItem}*/ />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
    </ProductContextProvider>
  );
}

export default App;
