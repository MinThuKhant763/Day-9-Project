import React, { useContext } from 'react';
import './Nav.css';
import { ItemContext } from '../store/itemContext';
const Nav = ({ showCartHandler }) => {
    const { items } = useContext(ItemContext);
    const totalCart = items.reduce((currentVal, item) => {
        return currentVal + item.amount;
    }, 0);

    return (
        <nav className='nav'>
            <h2>Shoopy</h2>
            <button onClick={ showCartHandler }>Card <span>({ totalCart })</span></button>
        </nav>
    );
};

export default Nav;
