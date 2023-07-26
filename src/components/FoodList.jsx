import { useState } from 'react';
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    console.log(foodId);
    const filteredFood = [...foods].filter((deletedFood) => {
        if (deletedFood.id !== foodId) {
            return true;
        }
    })
    setFoods(filteredFood);
  }

  const addFood = (newFood) => {
    // Create a new array
    const allFoods = [...foods, newFood];
    setFoods(allFoods);
  };

  const searchFood = (foodName) => {
    const searchedFood = [...foods].filter((food) => {
        if (food.name === foodName) {
            return true;
        }
    })
    console.log(searchedFood);
    setFoods(searchedFood);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood}/>
      <SearchBar searchFood={searchFood}/>
      <h1>LAB | React IronNutrition</h1>
      {foods.length === 0 ? (
        <p>Oops! There is no more content to show.</p> ) : (
        foods.map((food, index) => (
        <FoodBox key={index} food={food} deleteFood={deleteFood}/>
      )))}
    </div>
  );
}

export default FoodList;
