import { faCoffee, faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Food.css'
const Food = ({ addToOrder, food }) => {
    const { strMeal, strMealThumb, strCategory, strArea } = food
    // console.log(props)
    return (
        <div className='single-food'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <p>category: {strCategory}</p>
            <p>Origin: {strArea}</p>
            <button onClick={() => addToOrder(strMeal)}>
                <p>Add to order</p>
                <FontAwesomeIcon icon={faPlateWheat}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;