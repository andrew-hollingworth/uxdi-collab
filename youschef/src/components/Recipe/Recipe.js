import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Recipe.css'

export default function Recipe(props) {
  const pages = [
    ({ style }) => <animated.div>
      {<>
        <div className="recipeNameContainer">
          <h3 className="recipeName">Caesar Salad</h3>
          <i className="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton" onClick={ingredientOnClick}>Customize ></button>
      </>}
    </animated.div >,
    ({ style }) => <animated.div style={{ ...style }}>{<>
      <div className="ingredientsListContainer">
        <div className="ingredientsHeader">
          <h5 className="recipeName">Caesar Salad</h5>
          <i onClick={ingredientOnClick} className="fas fa-times cancel"></i>
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
          <button className="customizeIngredientsButton" onClick={() => { props.handleAddToCart(); ingredientOnClick(); }}>Add to Cart <span className="plusSign">+</span></button>
        </div>
      </div>
    </>}</animated.div >
  ]
  const [index, set] = useState(0)
  const ingredientOnClick = useCallback(() => set(state => (state + 1) % 2), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(0%,200px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0%,200px,0)' },
  })
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
        <div className="singleRecipeContainer1" onClick={ingredientOnClick}>
          <div className="simple-trans-main" onClick={ingredientOnClick}>
            {transitions.map(({ item, props, key }) => {
              const Page = pages[item]
              return <Page key={key} style={props} />
            })}
          </div>
        </div>



        {/* BELOW IS SECOND RECIPE CONTAINER */}
        <div className="singleRecipeContainer2">
          <div className="recipeNameContainer">
            <h3 className="recipeName">Chicken Parm</h3>
            <i className="fas fa-stopwatch stopwatch"></i>
          </div>
          <button className="customizeButton">Customize ></button>
        </div>

        {/* BELOW IS THIRD RECIPE CONTAINER */}
        <div className="singleRecipeContainer3">
          <div className="recipeNameContainer">
            <h3 className="recipeName">Channa Masala</h3>
            <i className="fas fa-stopwatch stopwatch"></i>
          </div>
          <button className="customizeButton">Customize ></button>
        </div>
      </div>

      <button className="scheduleButton">Schedule Delivery</button>
    </div>
  )
}
