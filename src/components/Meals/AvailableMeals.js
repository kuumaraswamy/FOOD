import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biryani',
    description: 'South Indian speciality !',
    price: 159,
  },
  {
    id: 'm2',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 259,
  },
  
  {
    id: 'm3',
    name: 'Pizza',
    description: 'Made especially for you',
    price: 159,
  },
  {
    id: 'm4',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 129,
  },
  {
    id: 'm5',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 189,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
