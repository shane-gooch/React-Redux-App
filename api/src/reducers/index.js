import {
  FETCH_DRINKS_START,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_FAIL
} from "../actions";

const initialState = {
  drinks: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRINKS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_DRINKS_SUCCESS:
      return {
        isFetching: false,
        drinks: action.payload
      };
    case FETCH_DRINKS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "Unable to fetch drinks"
      };
    default:
      return state;
  }
};

export default reducer;
