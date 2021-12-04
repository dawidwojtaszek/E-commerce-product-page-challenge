import React, { useState, useContext } from "react";
import Product from "../style/productSection/productInfo";
import CartIcon from '../images/icon-cart-btn.svg';
import PlusIcon from '../images/icon-plus.svg';
import MinusIcon from '../images/icon-minus.svg';
import { CartContext } from "../context/cartContext";
const ProductInfo = ({ product }) => {

    // Handle minus button
    const handleMinusBtn = (e) => {
        if (counter === 0) {
            setCounter(0)
        } else {
            setCounter(counter - 1);
        }

        e.preventDefault();
    }
    // State for counter
    const [counter, setCounter] = useState(0);

    //Context for Cart
    const [currentCart, setCart] = useContext(CartContext);
    return (
        <Product>
            <Product.SubTitle>
                {product.subtitle}
            </Product.SubTitle>
            <Product.Title>
                {product.name}
            </Product.Title>
            <Product.Description>
                {product.description}
            </Product.Description>
            <Product.PriceInfo>
                <Product.PriceBox>
                    <Product.Price>${product.price}</Product.Price>
                    <Product.Tag>{product.tag}</Product.Tag>
                </Product.PriceBox>
                <Product.OldPrice>${product.oldPrice}</Product.OldPrice>
            </Product.PriceInfo>
            <Product.AddCartBox>
                <Product.QuantityBox>
                    <Product.QuantityBtn aria-label="Minus">
                        <img src={MinusIcon} onClick={handleMinusBtn} />
                    </Product.QuantityBtn>
                    <Product.Quantity>{counter}</Product.Quantity>
                    <Product.QuantityBtn aria-label="Plus">
                        <img src={PlusIcon} onClick={() => setCounter(counter + 1)} />
                    </Product.QuantityBtn>
                </Product.QuantityBox>
                <Product.CartBtn onClick={() => setCart(currentCart + counter)} aria-label="Add to Cart">
                    <Product.CartIcon src={CartIcon} />
                    Add to cart
                </Product.CartBtn>
            </Product.AddCartBox>
        </Product>
    )
}

export default ProductInfo;