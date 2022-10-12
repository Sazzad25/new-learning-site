import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Quize from '../Quize/Quize';
import ReviewItem from '../ReviewItem/ReviewItem';

const Quizes = () => {
    // const {initialCart} = useLoaderData();
    const orders = useLoaderData();
    console.log(orders);
//   const quizeData = loaderData.orders
    // const [cart, setCart] = useState(initialCart)

    // const handleRemoveItem = (id) =>{
    //     const remaining = cart.filter(product => product.id !== id);
    //     setCart(remaining);
    //     removeFromDb(id);
    // }

    // const clearCart = () =>{
    //     setCart([]);
    //     deleteShoppingCart();
    // }

    return (
        <div className='shop-container'>
            <h2>Quize: {orders.length}</h2>
            {
                orders.data.questions.map(order => <Quize key={order.id} order={order}></Quize>)
            }
           
        </div>
    );
};

export default Quizes;