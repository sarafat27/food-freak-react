import React from 'react';
import './Orders.css'
const Orders = ({ order }) => {
    return (
        <div className='ordered-box'>
            <h3>ordered food</h3>
            <p>meals:</p>
            {
                order.map(foodname => <li key={order.indexOf(foodname)}>{foodname}</li>)
            }
        </div>
    );
};

export default Orders;