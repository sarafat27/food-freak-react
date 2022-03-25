import React from 'react';
import './Food.css'
const Food = (props) => {
    const { strMeal, strMealThumb, strCategory, strArea, strYoutube } = props.food
    // console.log(props)
    return (
        <div className='single-food'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <p>category: {strCategory}</p>
            <p>Origin: {strArea}</p>
            <button>
                <p>Add to order</p>
            </button>
        </div>
    );
};

export default Food;