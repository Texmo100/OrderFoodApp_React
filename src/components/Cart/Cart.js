import React from 'react';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = () => {
    const DUMMY_CARTITEMS = [
        {
            id: 'c1',
            name: 'Sushi',
            amount: 2,
            price: 12.99
        }
    ]

    // variable in charge to render the entire cart items list
    const cartItems = <ul className={classes['cart-items']}>{DUMMY_CARTITEMS.map(item => <li>{item.name}</li>)}</ul>

    return(
        <Modal>
            { cartItems }
            <div className={classes.total}>
                <span>Total amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>

            </div>
        </Modal>
    )
}

export default Cart;