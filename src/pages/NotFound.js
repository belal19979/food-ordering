import './notfound.css';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>NotFound</h1>
      <Link to="/">
        <button className="back">back to menu</button>
      </Link>
    </div>
  );
}
