import React, {useState} from 'react'
import CartContext from './cart-context'



const CartProvider = (props) => {
    const [items, updateItems] = useState([]);
    const addItemToCartHandler = (item) => {
        updateItems([...items, item])
        console.log('add item cart handler',cartContext)
     
  };

    const removeItemFromCartHandler = (id) =>{}

    const cartContext={
        items: items,
        // totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message: "click here",
    }

  return (
    <CartContext.Provider value={cartContext}>
         {console.log('inside cart context.provider',cartContext)}
        {props.children}  
    </CartContext.Provider>
  )
}

export default CartProvider
