import React from 'react';
import './Product.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props.product);
    const { id, img, name, price, qantity, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
        <img src={img} alt="no image" />
        <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p className='product-price'>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}Stars</p>
        </div>
        <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart </button> 
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </div>
        );
    };
    
    export default Product;