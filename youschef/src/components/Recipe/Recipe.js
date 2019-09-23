import React from 'react'
import './Recipe.css'

export default function Recipe() {
  return (
    <div className="recipeContainer">
      <div className="singleRecipeContainer">
        <div className="recipeNameContainer">
          <h3 className="recipeName">Caesar Salad</h3>
          <i class="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton">Customize ></button>
      </div>
      <button className="scheduleButton">Schedule Delivery</button>
    </div>
  )
}
