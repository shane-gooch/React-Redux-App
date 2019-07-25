import React from "react";
import "./App.css";

import Header from "./components/Header";
import SearchCocktailsForm from "./components/SearchCocktailsForm";
import DrinkContainer from "./components/DrinkContainer";
import Loader from "react-loader-spinner";

import { fetchDrinks, fetchIngredients, fetchRandom } from "./actions";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const {
      fetchDrinks,
      fetchIngredients,
      isFetching,
      drinks,
      fetchRandom
    } = this.props;
    return (
      <div className="App">
        <Header />
        <SearchCocktailsForm
          fetchDrinks={fetchDrinks}
          fetchIngredients={fetchIngredients}
          fetchRandom={fetchRandom}
        />
        {isFetching ? (
          <Loader type="Circle" color="blue" width={100} height={100} />
        ) : (
          <DrinkContainer drinks={drinks} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State:", state);
  return {
    drinks: state.drinks,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchDrinks, fetchIngredients, fetchRandom }
)(App);
