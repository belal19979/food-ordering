import './order.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../store/Context';
import OrderItem from '../components/orders/OrderItem';
export default function Order() {
  const cartCtx = useContext(CartContext);

  const hasOrder = cartCtx.items.length > 0;
  function removeOrder(id) {
    cartCtx.removeItem(id);
  }
  function addOrder(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  return (
    <div className="order">
      <ul className="cart-items">
        {cartCtx.items.map((item) => (
          <OrderItem
            key={item.id}
            {...item}
            onRemove={removeOrder.bind(null, item.id)}
            onAdd={addOrder.bind(null, item)}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)} $</span>
      </div>
      <div className="actions">
        <Link to="/">
          <button className="button--alt">back to food menu</button>
        </Link>
        <Link to="/order/checkout">
          {hasOrder && <button className="button">Checkout</button>}
        </Link>
      </div>
    </div>
  );
}
