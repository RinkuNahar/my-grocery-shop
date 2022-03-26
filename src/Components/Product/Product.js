import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
    const { name, img, price } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <div className="product-info">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: $
                    {price}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='add-btn'>
                <h4>ADD TO CART</h4>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;