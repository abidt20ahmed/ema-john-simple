import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])
    
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id
        for(const id in storedCart){
            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            
            // step 3:get quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            console.log(addedProduct);
        }
        setCart(savedCart)
    },[products])
    
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
        // const storedCarts = getShoppingCart();
        // console.log(storedCarts);
        // let sum = 0;
        // for(let arts in storedCarts){
        //     const allCarts = storedCarts[arts];
        //     sum = sum +allCarts;
        // }
        // console.log(sum);
        
    }
    
    return (
        <div className='shop-container'>
        <div className="products-container">
        {
            products.map(product=> <Product 
                key={product.id} 
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }
            </div>
            <div>
            <Cart cart={cart}></Cart>
            </div>
            </div>
            );
        };
        
        export default Shop;