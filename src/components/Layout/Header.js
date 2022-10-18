import {Fragment} from 'react'
import MealsImg from "../../assets/meals.jpeg"
import classes from'./Header.module.css'

const Header = props => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img  src={MealsImg} alt=" A table with full of delicious Food"/>
        </div>
    </Fragment>
    
  )
}

export default Header
