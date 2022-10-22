import React, {useContext} from 'react'
import CartCntx from '../../../Store/cart-context'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const cartcntx = useContext(CartCntx);
  console.log("re intialised",cartcntx)
  const addItemToCart = (event) => {
    //update cartcntxt items
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    cartcntx.addItem({ ...props.item, quantity:quantity });
    console.log('after add item to cart',cartcntx)
  };
  return (
    <form className={classes.form}> 
    {console.log('inside render',cartcntx.items)}
        <Input label='Amount' input={{
            id:"amount_" + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1',
        }}/>
        <button onClick={addItemToCart}>+ Add</button>
    </form>
  )
}

export default MealItemForm

