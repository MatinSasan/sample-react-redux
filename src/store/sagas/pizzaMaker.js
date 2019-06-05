import { put } from 'redux-saga/effects';

import axios from '../../axios-order';

import * as actions from '../actions/index';
import { FIREBASE } from '../../config';

export function* initIngredientsSaga(action) {
  try {
    const res = yield axios.get(`${FIREBASE}ingredients.json`);

    yield put(actions.setIngredients(res.data));
  } catch (err) {
    yield put(actions.fetchIngredientsFailed());
  }
}
