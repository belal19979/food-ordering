import Header from '../components/header/Header';
import MealList from '../components/meals/MealList';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <MealList />
    </div>
  );
}
