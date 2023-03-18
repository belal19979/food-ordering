import './orderItem.css';

const OrderItem = (props) => {
  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
          <span className="price">{props.price} $</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      {!props.Checkout && (
        <div className="actions">
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      )}
    </li>
  );
};

export default OrderItem;
