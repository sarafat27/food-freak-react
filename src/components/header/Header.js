import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <h1>Food freak</h1>
                <div>
                    <a href="/food">Food</a>
                    <a href="/orders">Orders</a>
                    <a href="/offers">Offers</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;