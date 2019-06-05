import { put } from 'redux-saga/effects';

import axios from '../../axios-order';
import * as actions from '../actions/index';

export function* purchasePizzaSaga(action) {
  yield put(actions.purchasePizzaStart());
  try {
    const res = yield axios.post(
      `/orders.json?auth=${action.token}`,
      action.orderData
    );
    yield put(actions.purchasePizzaSuccess((res.data.name, action.orderData)));
  } catch (error) {
    yield put(actions.purchasePizzaFail(error));
  }
}

export function* fetchOrderSaga(action) {
  yield put(actions.fetchOrdersStart());
  try {
    let queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${
      action.userId
    }"`;
    const res = yield axios.get(`/orders.json${queryParams}`);
    const fetchedOrders = [];
    for (let key in res.data) {
      fetchedOrders.push({
        ...res.data[key],
        id: key
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail(err));
  }
}
