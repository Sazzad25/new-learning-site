import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, logo, total } = product;
    
    return (
        <div className='product'>
            <img src={logo} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Total: {total}</p>
            </div>
            <a onClick={() => handleAddToCart(product)} className='btn-cart' href='/quizes'
              aria-label=''>
                <p className='btn-text'>Go to Quize</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </a>
        </div>
    );
};

export default Product;