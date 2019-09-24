import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="headerContainer">
      <ul className="headerUl">
        <li className="headerLi"><i class="fas fa-user-circle profile"></i></li>
        <li className="headerLi">Yous Chef</li>
        <li className="headerLi"><i class="fas fa-shopping-cart cart"></i></li>
      </ul>
    </div>
  )
}
