import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
    const [currentCart, setCart] = useState(0);
    return (
        <CartContext.Provider value={[currentCart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}