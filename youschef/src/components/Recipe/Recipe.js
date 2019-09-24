import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Recipe.css'

export default function Recipe(props) {
  const pages = [
    ({ style }) => <animated.div style={{ ...style, color: 'lightpink' }}>
      {<>
        <div className="recipeNameContainer">
          <h3 className="recipeName">Caesar Salad</h3>
          <i className="fas fa-stopwatch stopwatch"></i>
        </div>

      </>}
    </animated.div >,
    ({ style }) => <animated.div style={{ ...style, color: 'lightblue' }}>{<>
      <div className="recipeNameContainer">
        <h3 className="recipeName">Caesar Salad</h3>
        <i className="fas fa-stopwatch stopwatch"></i>
      </div>

    </>}</animated.div>
  ]
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 2), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(0%, 300px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
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
        <div className="singleRecipeContainer" onClick={onClick}>
          <div className="simple-trans-main" onClick={onClick}>
            {transitions.map(({ item, props, key }) => {
              const Page = pages[item]
              return <Page key={key} style={props} />
            })}
          </div>
          <button onClick={() => props.handleAddToCart()} className="customizeButton">Customize ></button>
        </div>



        {/* BELOW IS SECOND RECIPE CONTAINER */}
        <div className="singleRecipeContainer">
          <div className="recipeNameContainer">
            <h3 className="recipeName">Chicken Parm</h3>
            <i className="fas fa-stopwatch stopwatch"></i>
          </div>
          <button onClick={() => props.handleAddToCart()} className="customizeButton">Customize ></button>
        </div>

        {/* BELOW IS THIRD RECIPE CONTAINER */}
        <div className="singleRecipeContainer">
          <div className="recipeNameContainer">
            <h3 className="recipeName">Channa Masala</h3>
            <i className="fas fa-stopwatch stopwatch"></i>
          </div>
          <button onClick={() => props.handleAddToCart()} className="customizeButton">Customize ></button>
        </div>
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
