import React,{useContext} from 'react'
import CartCntxt from '../../Store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartcntxt = useContext((CartCntxt))
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartcntxt.items.map((item) => (
        <li>Name: {item.name} Price:{item.price} Quantity:{item.quantity}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;