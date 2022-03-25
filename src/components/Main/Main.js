import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Orders from '../Orders/Orders';
import './Main.css'
const Main = () => {
    const [foods, setFoods] = useState([])
    const [order, setOrder] = useState([])
    const orderedFood = []
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    const addToOrder = (food) => {
        orderedFood.push(food);
        console.log(orderedFood)
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