import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAIL } from './actionTypes';

const initialState = {
  token: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case GET_TOKEN_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducers;
