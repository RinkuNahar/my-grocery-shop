import React from 'react';
import './Header.css'
import heading from '../../images/heading.jpg'
const Header = () => {
    return (
        <div>
            <h1 className='header'>Funda Groceries</h1>
            <h3 className='text-center'>Great Products at a Price You'll Love it</h3>
            <img className='mx-auto img-fluid mt-4' src={heading} alt="" />
        </div>
    );
};

export default Header;