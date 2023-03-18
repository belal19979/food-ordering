import './headerCartButton.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../store/Context';

export default function HeaderCartButton() {
  const cartCtx = useContext(CartContext);

  const cartItemsNumber = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className="button">
      <span className="icon">
        <ShoppingCartIcon />
      </span>
      <span>Your cart</span>
      <span className="badge">{cartItemsNumber}</span>
    </button>
  );
}
