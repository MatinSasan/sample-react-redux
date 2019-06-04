import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';

import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import * as actions from '../../store/actions/index';

export class PizzaMaker extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuth) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  };

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinue = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.igns
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? (
      <h2>Ingredients can't be loaded</h2>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <React.Fragment>
          <Pizza ingredients={this.props.ings} />
          <BuildControls
            addIngredient={this.props.onIngredientAdded}
            removeIngredient={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuth}
          />
        </React.Fragment>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancel}
          purchaseContinued={this.purchaseContinue}
          price={this.props.price}
        />
      );
    }

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.pizzaMaker.ingredients,
    price: state.pizzaMaker.totalPrice,
    error: state.pizzaMaker.error,
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: igName => dispatch(actions.addIngredient(igName)),
    onIngredientRemoved: igName => dispatch(actions.removeIngredient(igName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(PizzaMaker, axios));
