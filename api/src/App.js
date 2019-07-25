import React from "react";
import "./App.css";

import Header from "./components/Header";
import SearchCocktailsForm from "./components/SearchCocktailsForm";
import DrinkContainer from "./components/DrinkContainer";

import { fetchDrinks, fetchIngredients, fetchRandom } from "./actions";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { fetchDrinks, fetchIngredients, drinks, fetchRandom } = this.props;
    return (
      <div className="App">
        <Header />
        <SearchCocktailsForm
          fetchDrinks={fetchDrinks}
          fetchIngredients={fetchIngredients}
          fetchRandom={fetchRandom}
        />
        <DrinkContainer drinks={drinks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State:", state);
  return {
    drinks: state.drinks
  };
};

export default connect(
  mapStateToProps,
  { fetchDrinks, fetchIngredients, fetchRandom }
)(App);
