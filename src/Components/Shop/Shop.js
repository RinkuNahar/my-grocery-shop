import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container container '>
            <div className="products-conatiner grid col-8">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container  grid col-4 gap-20px">
                <Cart cart={cart}>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;