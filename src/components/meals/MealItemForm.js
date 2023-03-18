import Input from '../Input';
import './mealItemForm.css';
import { useContext, useRef } from 'react';
import { CartContext } from '../../store/Context';

export default function MealItemForm({ id, meal }) {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    cartCtx.addItem({ ...meal, amount: enteredAmount });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        label="Quantity"
        input={{
          id,
          type: 'number',
          min: '0',
          defaultValue: '1',
          ref: amountInputRef,
        }}
      />
      <button type="submit">+ADD</button>
    </form>
  );
}
