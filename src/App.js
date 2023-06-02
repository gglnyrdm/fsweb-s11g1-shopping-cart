import { Route } from "react-router-dom";
import Products from "./components/Products";
import Navigation from "./components/Navigation";
import ShoppingCart from "./components/ShoppingCart";
import CartContextProvider from "./contexts/CartContext";
import ProductContextProvider from './contexts/ProductContext';

function App() {

  return (
  <ProductContextProvider>
    <CartContextProvider>
      <div className="App">
        <Navigation />

        <main className="content">
          <Route exact path="/">
            <Products />
          </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
       </main>
      </div>
    </CartContextProvider>
  </ProductContextProvider>
  );
}

export default App;
