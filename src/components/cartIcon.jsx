import React, { useState, useContext } from "react";
import { CartIconBox, CartIcon, CartCounter, CartBox } from "../style/header/cart";
import Icon from '../images/icon-cart.svg'
import CartComponent from "./cart";
import { AnimatePresence } from "framer-motion";
import { CartContext } from "../context/cartContext";

const CartIconComponent = () => {
    const [currentCart] = useContext(CartContext);
    const [showCart, toggleCart] = useState(false);

    return (
        <CartBox>
            <CartIconBox onClick={() => toggleCart(!showCart)}>
                <CartIcon src={Icon} alt="cart" />
                {
                    currentCart === 0 ? ('') : (
                        <CartCounter>{currentCart}</CartCounter>
                    )
                }

            </CartIconBox>
            <AnimatePresence>
                {showCart ? (<CartComponent />) : ('')}
            </AnimatePresence>
        </CartBox>
    )
}

export default CartIconComponent;