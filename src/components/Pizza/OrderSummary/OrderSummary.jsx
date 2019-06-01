import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const IngredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span stlye={{ textTransform: 'capitalize' }}>{key}</span>:{' '}
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious Burger with the following Ingredients:</p>
      <ul>{IngredientSummary}</ul>
      <p>Total Price: {props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
