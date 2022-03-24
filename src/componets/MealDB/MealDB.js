import React from 'react';
import './MealDB.css';

const MealDB = () => {
    return (
        <div className='food-container'>

            <img src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" alt="" />
            <h2>Corba</h2>

            <div className="food-hover">
                <div className="food-hover__img">
                    <img src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" alt="" />
                </div>
                <div className="food-hover__info">
                    <p>Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil.</p>
                    <button>Learn from Youtube</button>
                </div>
            </div>

        </div>
    );
};

export default MealDB;