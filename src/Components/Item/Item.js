
import './Item.css'

const Item = ({ cart }) => {
    return (
        <div className='selected-item'>
            <img src={cart.img} alt="" />
            <h4> {cart.name}</h4>
        </div>
    );
};

export default Item;