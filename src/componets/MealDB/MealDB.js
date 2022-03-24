import './MealDB.css';

const MealDB = ({ food }) => {
    const { strMealThumb, strMeal, strInstructions } = food;
    return (
        <div className='food-containerer'>
            <img src={strMealThumb} alt="" />
            <h2>Name: {strMeal}</h2>

            <div className="food-hover">
                <div className="food-hover__img">
                    <img src={strMealThumb} alt="" />
                </div>
                <div className="food-hover__info">
                    <h4>Name: {strMeal}</h4>
                    <p>{strInstructions.slice(0, 250)}</p>
                    <a href="">Learn from Youtube</a>
                </div>
            </div>
        </div>
    );
};

export default MealDB;