import React from 'react'
import './Recipe.css'

export default function Recipe(props) {
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
    <div className="recipesContainer">
      <div className="singleRecipeContainer">
        <div className="recipeNameContainer">
          <h3 className="recipeName">Caesar Salad</h3>
          <i class="fas fa-stopwatch stopwatch"></i>
        </div>
        <button onClick={() => props.handleAddToCart()} className="customizeButton">Customize ></button>
      </div>

      {/* BELOW IS SECOND RECIPE CONTAINER */}
      <div className="singleRecipeContainer">
        <div className="recipeNameContainer">
          <h3 className="recipeName">Chicken Parm</h3>
          <i class="fas fa-stopwatch stopwatch"></i>
        </div>
        <button onClick={() => props.handleAddToCart()} className="customizeButton">Customize ></button>
      </div>

      {/* BELOW IS THIRD RECIPE CONTAINER */}
      <div className="singleRecipeContainer">
        <div className="recipeNameContainer">
          <h3 className="recipeName">Channa Masala</h3>
          <i class="fas fa-stopwatch stopwatch"></i>
        </div>
        <button onClick={() => props.handleAddToCart()} className="customizeButton">Customize ></button>
      </div>

    </div>

    <div className="ingredientsListContainer">
      <div className="ingredientsHeader">
        <h5>Caesar Salad</h5>
        <i class="fas fa-times"></i>
      </div>
      <div className="ingredientsList">
        <ul className="ingredientsUl">
          <li className="ingredientsLi">Lettuce</li>
          <li className="ingredientsLi">Crouton</li>
          <li className="ingredientsLi">Parmesan</li>
          <li className="ingredientsLi">Chicken</li>
          <li className="ingredientsLi">Dressing</li>
          <li className="ingredientsLi">Anchovies</li>
        </ul>
        <button className="customizeIngredientsButton">Add to Cart <span className="plusSign">+</span></button>
      </div>
    </div>


      <button className="scheduleButton">Schedule Delivery</button>
    </div>
  )
}
