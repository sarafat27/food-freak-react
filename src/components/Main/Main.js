import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Main.css'
const Main = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    return (
        <div className='main-container'>
            <div className='food-container'>
                {
                    foods.map(food => <Food food={food} key={food.idMeal}></Food>)
                }
            </div>
            <div className='ordered-area'>
                <h3>ordered food</h3>
            </div>
        </div>
    );
};

export default Main;