import React from 'react'
import Recipe from '../Recipe/Recipe'
import './OrderForm.css'

export default function OrderForm(props) {
  return (
    <div>
      <Recipe
        handleAddToCart={props.handleAddToCart} />
    </div>
  )
}
