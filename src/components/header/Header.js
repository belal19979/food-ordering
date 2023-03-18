import './header.css';
import HeaderCartButton from './HeaderCartButton';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="title">Meals</h1>
        <Link to="/order">
          <HeaderCartButton />
        </Link>
      </header>
      <div className="main-image">
        <img
          src="https://media.istockphoto.com/id/1191080960/nl/foto/traditioneel-turks-ontbijt-en-mensen-die-verschillende-gerechten-nemen-brede-samenstelling.jpg?s=1024x1024&w=is&k=20&c=Ud_hxZIr640iwMRraqq0Z9OdFbVnloygdcYd55gJgHI="
          alt="food img"
        />
        <div className="layer"></div>
        <h1 className="desc"> Delicious Food, Delivered To You</h1>
      </div>
    </>
  );
}
