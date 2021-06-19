import React from 'react';
import cart from '../cart/cart.png'

export const CartWidget = () => {
    return (
        <div>
            <img src={cart} className="cart" alt="Canasta de compra"/>
        </div>
    )
}
