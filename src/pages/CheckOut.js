import './checkout.css';
import { CartContext } from '../store/Context';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../components/orders/OrderItem';
import { Link } from 'react-router-dom';

export default function CheckOut() {
  const navigate = useNavigate();
  const [orderFinished, setOrderFinished] = useState(false);
  const cartCtx = useContext(CartContext);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const postCodeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      postCode: postCodeRef.current.value,
    };

    const res = fetch(
      'https://food-order-app-b300d-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
          user: userInfo,
          orderedItems: cartCtx.items,
        }),
      },
    )
      .then((res) => {
        setOrderFinished(true);
        //clear the cart
        cartCtx.resetCart();
        //redirect the user
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })

      .catch((e) => {
        console.log(res);
      });
  };
  return (
    <>
      {orderFinished ? (
        <div className="feed-back">
          <h1>
            Done , your order will arrive shortly , you are being directed to
            home
          </h1>
        </div>
      ) : (
        <div className="order">
          <ul className="cart-items">
            {cartCtx.items.map((item) => (
              <OrderItem Checkout={true} key={item.id} {...item} />
            ))}
          </ul>
          <div className="total">
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount.toFixed(2)} $</span>
          </div>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="control">
              <label htmlFor="fname">First name:</label>
              <input ref={firstNameRef} type="text" id="fname" required />
            </div>
            <div className="control">
              <label htmlFor="lname">Last name:</label>
              <input ref={lastNameRef} type="text" id="lname" required />
            </div>
            <div className="control">
              <label htmlFor="address">Address:</label>
              <input ref={addressRef} type="text" id="address" required />
            </div>
            <div className="control">
              <label htmlFor="postcode">Post Code:</label>
              <input ref={postCodeRef} type="text" id="postcode" required />
            </div>
            <div className="checkout-btns">
              <Link to="/">
                <button className="cancel">cancel</button>
              </Link>
              <button className="submit" type="submit">
                Summit the order
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
