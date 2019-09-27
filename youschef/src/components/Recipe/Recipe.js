import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Recipe.css'

export default function Recipe(props) {
  // CAESAR IMAGE
  const caesarPages = [
    ({ style }) => <animated.div>
      {<>
        <div className="recipeNameContainer">
          <h3 className="recipeName">Caesar Salad</h3>
          <i className="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton" onClick={caesarIngredientOnClick}>Customize <i className="fas fa-chevron-right"></i></button>
      </>}
    </animated.div >,
    ({ style }) => <animated.div style={{ ...style }}>{<>
      <div className="ingredientsListContainer">
        <div className="ingredientsHeader">
          <h5 className="recipeName">Caesar Salad</h5>
          <i onClick={caesarIngredientOnClick} className="fas fa-times cancel"></i>
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
          <button className="customizeIngredientsButton" onClick={() => { props.handleAddToCart(); caesarIngredientOnClick(); }}>Add to Cart <span className="plusSign">+</span></button>
        </div>
      </div>
    </>}</animated.div >
  ]
  const [index, set] = useState(0)
  const caesarIngredientOnClick = useCallback(() => set(state => (state + 1) % 2), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(0%,200px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0%,200px,0)' },
  })

  // CHICKEN PARM =============================
  const parmPages = [
    ({ style }) => <animated.div>
      {<>
        <div className="recipeNameContainer">
          <h3 className="recipeName">Chicken Parm</h3>
          <i className="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton" onClick={parmIngredientOnClick}>Customize <i className="fas fa-chevron-right"></i></button>
      </>}
    </animated.div >,
    ({ style }) => <animated.div style={{ ...style }}>{
      <>
        <div className="ingredientsListContainer">
          <div className="ingredientsHeader">
            <h5 className="recipeName">Chicken Parm</h5>
            <i onClick={parmIngredientOnClick} className="fas fa-times cancel"></i>
          </div>
          <div className="ingredientsList">
            <ul className="ingredientsUl">
              <li className="ingredientsLi">Spaghetti</li>
              <li className="ingredientsLi">Parmesan</li>
              <li className="ingredientsLi">Breadcrumbs</li>
              <li className="ingredientsLi">Chicken</li>
              <li className="ingredientsLi">Sauce</li>
            </ul>
            <button className="customizeIngredientsButton" onClick={() => { props.handleAddToCart(); parmIngredientOnClick(); }}>Add to Cart <span className="plusSign">+</span></button>
          </div>
        </div>
      </>
    }</animated.div >
  ]
  const [parmindex, parmset] = useState(0)
  const parmIngredientOnClick = useCallback(() => parmset(state => (state + 1) % 2), [])
  const parmTransitions = useTransition(parmindex, p => p, {
    from: { opacity: 0, transform: 'translate3d(0%,200px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0%,200px,0)' },
  })

  // CHANA MASALA =============================
  const chanaPages = [
    ({ style }) => <animated.div>
      {<>
        <div className="recipeNameContainer">
          <h3 className="recipeName">Chana Masala</h3>
          <i className="fas fa-stopwatch stopwatch"></i>
        </div>
        <button className="customizeButton" onClick={chanaIngredientOnClick}>Customize <i className="fas fa-chevron-right"></i></button>
      </>}
    </animated.div >,
    ({ style }) => <animated.div style={{ ...style }}>{
      <>
        <div className="ingredientsListContainer">
          <div className="ingredientsHeader">
            <h5 className="recipeName">Chana Masala</h5>
            <i onClick={chanaIngredientOnClick} className="fas fa-times cancel"></i>
          </div>
          <div className="ingredientsList">
            <ul className="ingredientsUl">
              <li className="ingredientsLi">Chickpeas</li>
              <li className="ingredientsLi">Garam Masala</li>
              <li className="ingredientsLi">Extra Spices</li>
              <li className="ingredientsLi">Tomato</li>
              <li className="ingredientsLi">Onion</li>
            </ul>
            <button className="customizeIngredientsButton" onClick={() => { props.handleAddToCart(); chanaIngredientOnClick(); }}>Add to Cart <span className="plusSign">+</span></button>
          </div>
        </div>
      </>
    }</animated.div >
  ]
  const [chanaindex, chanaset] = useState(0)
  const chanaIngredientOnClick = useCallback(() => chanaset(state => (state + 1) % 2), [])
  const chanaTransitions = useTransition(chanaindex, p => p, {
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
        <div className="singleRecipeContainer caesar" onClick={caesarIngredientOnClick}>
          <div className="simple-trans-main" onClick={caesarIngredientOnClick}>
            {transitions.map(({ item, props, key }) => {
              const Caesarpage = caesarPages[item]
              return <Caesarpage key={key} style={props} />
            })}
          </div>
        </div>



        {/* BELOW IS SECOND RECIPE CONTAINER */}
        <div className="singleRecipeContainer parm" onClick={parmIngredientOnClick}>
          <div className="simple-trans-main" onClick={parmIngredientOnClick}>
            {parmTransitions.map(({ item, props, key }) => {
              const Parmpage = parmPages[item]
              return <Parmpage key={key} style={props} />
            })}
          </div>
        </div>

        {/* BELOW IS THIRD RECIPE CONTAINER */}
        <div className="singleRecipeContainer chana" onClick={chanaIngredientOnClick}>
          <div className="simple-trans-main" onClick={chanaIngredientOnClick}>
            {chanaTransitions.map(({ item, props, key }) => {
              const Chanapage = chanaPages[item]
              return <Chanapage key={key} style={props} />
            })}
          </div>
        </div>
      </div>
      <button className="scheduleButton">Schedule Delivery</button>
    </div>
  )
}
