
import Item from '../Item/Item';
import './Cart.css'
import swal from 'sweetalert';
// import { useState } from 'react';


const Cart = ({ cart }) => {

    const chooseHandleButton = (cart) => {
        const randomItem = cart[Math.floor(Math.random() * cart.length)]
        swal("Your random selected product:", randomItem.name);
        if (randomItem) {
            return randomItem;
        }
    }


    return (
        <div className='cart'>
            <h2>My Shopping Items</h2>
            {
                cart.map(cart => <Item
                    key={cart.id}
                    cart={cart}
                ></Item>)
            }
            <button onClick={() => chooseHandleButton(cart)} className='choose-btn'>
                <p className='text-center mt-2'>CHOOSE 1 FOR ME</p>
            </button>
            <button className='remove-button'>
                <p className='text-center mt-2'>REMOVE ALL</p>
            </button>
        </div>
    );
};

export default Cart;