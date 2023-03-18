import { createContext } from 'react';
import { useReducer } from 'react';

export const CartContext = createContext({});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //to check if the item already existed in cart
    const existedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const existedItem = state.items[existedItemIndex];

    let updatedItems;

    if (existedItem) {
      const updatedItem = {
        ...existedItem,
        amount: existedItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      updatedItems[existedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existedItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );

    const existedItem = state.items[existedItemIndex];
    let updatedTotalAmount = state.totalAmount - existedItem.price;
    let updatedItems;
    if (existedItem.amount > 1) {
      const updatedItem = { ...existedItem, amount: existedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'RESET') {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const resetCartHandler = () => {
    dispatchCartAction({ type: 'RESET' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetCart: resetCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
