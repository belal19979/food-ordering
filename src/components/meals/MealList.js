import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';
import './mealList.css';
import fetchAndCustomizeMeals from '../../apiCall';

import CircularIndeterminate from '../CircularIndeterminate';

export default function MealList() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log(meals);
  useEffect(() => {
    fetchAndCustomizeMeals(
      'https://food-order-app-b300d-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
    )
      .then((newMeals) => {
        setMeals(newMeals);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  }, []);

  return (
    <div className="meals">
      <div className="card">
        {isLoading && <CircularIndeterminate />}
        {error && <h1>sorry, Failed to get the menu</h1>}
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </div>
    </div>
  );
}
