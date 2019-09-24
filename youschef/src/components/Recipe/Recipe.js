import React from 'react'
import './Recipe.css'

export default function Recipe() {
  return (
    <div className="recipeContainer">


    {/* BELOW WILL BE MOVED, JUST FOR NOW */}

    <div className="desktopMainPic"></div>

    <div className="progressBarContainer">
      <div className="progressCircle">Select</div>
      <div className="progressCircle">Schedule</div>
      <div className="progressCircle">Pay</div>
    </div>


      <h2 className="chooseIngredients">Choose Your Ingredients:</h2>
    {/* BELOW IS FIRST RECIPE CONTAINER */}
    <div className="recipesContainer">

      <div className="singleRecipeContainer">
        <div className="recipeNameContainer">
          <h3 className="recipeName">Caesar Salad</h3>
          <i class="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton">Customize ></button>
      </div>

    {/* BELOW IS SECOND RECIPE CONTAINER */}
      <div className="singleRecipeContainer">
        <div className="recipeNameContainer">
          <h3 className="recipeName">Chicken Parm</h3>
          <i class="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton">Customize ></button>
      </div>

    {/* BELOW IS THIRD RECIPE CONTAINER */}
      <div className="singleRecipeContainer">
        <div className="recipeNameContainer">
          <h3 className="recipeName">Channa Masala</h3>
          <i class="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton">Customize ></button>
      </div>

    </div>


      <button className="scheduleButton">Schedule Delivery</button>
    </div>
  )
}
