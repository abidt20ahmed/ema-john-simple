import React from 'react';
import Product from '../Product/Product';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    console.log(cart);
    let total = 0;
    let shipping = 0;
    cart.map(crt => {
        total = crt.price + total;
        shipping = crt.shipping + shipping
    })
    const tax = total*7/100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
        <h4>order summary</h4>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
        );
    };
    
    export default Cart;