import { all, call, put, take, takeLatest } from 'redux-saga/effects';
import { GET_TOKEN } from './actionTypes';

export function* getTokenSaga(payload) {
  return;
}

export default [takeLatest(GET_TOKEN, getTokenSaga)];
