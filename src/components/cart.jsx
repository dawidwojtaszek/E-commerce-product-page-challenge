import React, { useContext } from "react";
import { Cart, CartTitle, EmptyCart, CartElementBox } from "../style/header/cart";
import { CartContext } from "../context/cartContext";
import { Button } from '../style/elemnets/button';
import CartElement from "./cartElement";


const CartComponent = () => {



    const [currentCart] = useContext(CartContext);
    return (
        <Cart animate={{ y: 0, opacity: 1 }} initial={{ y: -20, opacity: 0 }} exit={{ y: -20, opacity: 0 }} transition={{ type: "tween", duration: 0.1 }} >
            <CartTitle>Cart</CartTitle>
            {
                currentCart === 0 ? (<EmptyCart>Your cart is empty</EmptyCart>) : (
                    <CartElementBox>
                        <CartElement />
                        <Button width="90%" aria-label="Checkout">Checkout</Button>
                    </CartElementBox>
                )
            }

        </Cart>
    )
}

export default CartComponent;