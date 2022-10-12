import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Home.css';
import logo from '../../images/giphy.gif';

const Home = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };


  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div>
      <div className="flex">
      <h4>This is react dom website. I am very happy to have made it. Hope you will like this website very much. Thank you all for visiting my website.</h4>
      <img className="pic" src={logo} alt="" />
      </div>
    <div className="shop-container">
      <div className="products-container">
        {products.data.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/quizes">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
    </div>
  );
};

export default Home;
