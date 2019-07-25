import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input, Button, Icon } from "semantic-ui-react";

export default function SearchCocktailsForm(props) {
  const [initialFormState] = useState({
    drinkName: "",
    ingredient: ""
  });
  const [formData, setFormData] = useState({
    drinkName: "",
    ingredient: ""
  });

  const changleHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fetchDrinks = e => {
    e.preventDefault();
    props.fetchDrinks(formData.drinkName);
    setFormData(initialFormState);
  };

  const fetchIngredients = e => {
    e.preventDefault();
    props.fetchIngredients(formData.ingredient);
    setFormData(initialFormState);
  };

  return (
    <div>
      <h2>Search Drinks By CockTail Name </h2>
      <form onSubmit={fetchDrinks}>
        <Input
          type="text"
          name="drinkName"
          placeholder="Enter a cocktail"
          onChange={changleHandler}
          value={formData.drinkName}
          required
        />
        <Button color="blue">Search</Button>
      </form>
      <h2>Search for Drinks by Ingredients</h2>
      <form onSubmit={fetchIngredients}>
        <Input
          type="text"
          name="ingredient"
          placeholder="Enter an ingredient"
          onChange={changleHandler}
          value={formData.ingredient}
          required
        />
        <Button color="blue">Search</Button>
      </form>
      <Button
        color="red"
        className="tispyButton"
        animated
        onClick={props.fetchRandom}
      >
        <Button.Content visible>I'm Feeling Tispy Right Now</Button.Content>
        <Button.Content hidden>
          <Icon name="hand peace" />
        </Button.Content>
      </Button>
    </div>
  );
}
