import React from "react";

export default function DrinkContainer(props) {
  return (
    <div className="drinContainer">
      {props.drinks &&
        props.drinks.map(drink => {
          return (
            <div key={drink.idDrink}>
              <h3 className="drinkTitle">{drink.strDrink}</h3>
              <img
                className="drinkPicture"
                src={drink.strDrinkThumb}
                alt="drink"
              />
              <p className="instructions">{drink.strInstructions}</p>
            </div>
          );
        })}
    </div>
  );
}