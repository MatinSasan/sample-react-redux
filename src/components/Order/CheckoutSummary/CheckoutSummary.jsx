import React from 'react';
import Pizza from '../../Pizza/Pizza';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Pizza ingredients={props.ingredients} />
      </div>
      <Button clicked={props.onCheckoutCancelled} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.checkoutContinued} btnType="Success">
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
