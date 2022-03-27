import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Orders from '../Orders/Orders';
import './Main.css'
const Main = () => {
    const [foods, setFoods] = useState([])
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    const addToOrder = (foodName) => {
        const exists = order.find(previous => previous === foodName);
        if (!exists) {
            const foodsName = [...order, foodName]
            setOrder(foodsName)
        }
    }

    return (
        <div className='main-container'>
            <div className='food-container'>
                {
                    foods.map(food => <Food addToOrder={addToOrder} food={food} key={food.idMeal}></Food>)
                }
            </div>
            <div className='ordered-area'>
                <Orders order={order}></Orders>
            </div>
        </div>
    );
};

export default Main;