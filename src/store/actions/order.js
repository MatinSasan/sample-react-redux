import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchasePizzaSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_PIZZA_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchasePizzaFail = error => {
  return {
    type: actionTypes.PURCHASE_PIZZA_FAIL,
    error: error
  };
};

export const purchasePizzaStart = () => {
  return {
    type: actionTypes.PURCHASE_PIZZA_START
  };
};

export const purchasePizza = (orderData, token) => {
  return dispatch => {
    dispatch(purchasePizzaStart());
    axios
      .post(`/orders.json?auth=${token}`, orderData)
      .then(res => {
        console.log(res.data);
        dispatch(purchasePizzaSuccess((res.data.name, orderData)));
      })
      .catch(err => {
        dispatch(purchasePizzaFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = err => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    err
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = token => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get(`/orders.json?auth=${token}`)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
