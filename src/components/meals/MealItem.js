import './mealItem.css';
import MealItemForm from './MealItemForm';

export default function MealItem(meal) {
  return (
    <li className="meal">
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">${meal.price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} meal={meal} />
      </div>
    </li>
  );
}
