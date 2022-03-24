import { useEffect, useState } from 'react';
import './App.css';
import MealDB from './componets/MealDB/MealDB';

function App() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
      .then(res => res.json())
      .then(data => setFoods(data.meals))
  }, []);
  return (
    <div className='App'>
      <div className="food-container">
        {
          foods.map(food => <MealDB
            food={food}
          ></MealDB>)
        }
      </div>
    </div>
  );
}

export default App;
