import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAIL } from './actionTypes';

export const getToken = () => {
  return {
    type: GET_TOKEN,
  };
};

export const getTokenSuccess = (payload) => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload,
  };
};

export const getTokenFail = () => {
  return {
    type: GET_TOKEN_FAIL,
    payload,
  };
};
