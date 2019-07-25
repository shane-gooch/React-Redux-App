import axios from "axios";

export const FETCH_DRINKS_START = "FETCH_DRINKS_START";
export const FETCH_DRINKS_SUCCESS = "FETCH_DRINS_SUCCESS";
export const FETCH_DRINKS_FAIL = "FETCH_DRINKS_FAIL";

export const fetchDrinks = drinkName => dispatch => {
  dispatch({ type: FETCH_DRINKS_START });
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    )
    .then(res => {
      dispatch({
        type: FETCH_DRINKS_SUCCESS,
        payload: res.data.drinks
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: FETCH_DRINKS_FAIL });
      console.log(err.response);
    });
};

export const fetchIngredients = ingredient => dispatch => {
  dispatch({ type: FETCH_DRINKS_START });
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`
    )
    .then(res => {
      dispatch({
        type: FETCH_DRINKS_SUCCESS,
        payload: res.data.drinks
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: FETCH_DRINKS_FAIL });
      console.log(err.response);
    });
};

export const fetchRandom = () => dispatch => {
  dispatch({ type: FETCH_DRINKS_START });
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => {
      dispatch({
        type: FETCH_DRINKS_SUCCESS,
        payload: res.data.drinks
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: FETCH_DRINKS_FAIL });
      console.log(err.response);
    });
};
