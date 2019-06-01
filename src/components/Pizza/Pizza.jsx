import React from 'react';

import styles from './Pizza.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const Pizza = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <PizzaIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Please add some ingredients</p>;
  }

  return (
    <div className={styles.Pizza}>
      <PizzaIngredient type="bread-top" />
      {ingredients}
      <PizzaIngredient type="bread-bottom" />
    </div>
  );
};

export default Pizza;
