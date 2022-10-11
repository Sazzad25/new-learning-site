import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async() =>{
    // get Products
    // const productsData =await fetch('products.json');
    const productsData =await fetch(`https://openapi.programming-hero.com/api/quiz`);
    const products = await productsData.json();

    // get Cart
    const savedCart = getStoredCart();
    const initialCart = [];

    for(const id in savedCart){
        // const addedProduct = products.find(product => product.id === id);
        // if(addedProduct)
        // {
        //     const quantity = savedCart[id];
        //     addedProduct.quantity = quantity;
        //     initialCart.push(addedProduct);
        // }
    }

    return {products, initialCart};
}