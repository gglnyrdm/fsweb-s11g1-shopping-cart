import { createContext, useState } from "react";

const CartContextProvider =({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
    };

    const removeItem = (id) => {
        const newCart = [...cart];
        const indexToRemove = newCart.findIndex((item) => item.id === id);

        newCart.splice(indexToRemove, 1);
        setCart(newCart);
    };

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const CartContext = createContext();
export default CartContextProvider;