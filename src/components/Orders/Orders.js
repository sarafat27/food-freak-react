import React from 'react';
import './Orders.css'
const Orders = ({ order }) => {
    console.log(order)
    return (
        <div className='ordered-box'>
            <h3>ordered food</h3>
            <p>meals:</p>
        </div>
    );
};

export default Orders;