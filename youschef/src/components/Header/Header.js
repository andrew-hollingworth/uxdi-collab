import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <div className="headerContainer">
      <ul className="headerUl">
        <li className="headerLi"><i className="fas fa-user-circle profile"></i></li>
        <li className="headerLi"><span className="iconify hat" data-icon="mdi:chef-hat" data-inline="false"></span>Yous Chef</li>
        <li className="headerLi"><i className="fas fa-shopping-cart cart"><span className='cartNumber'>{props.cartCounter}</span></i></li>
      </ul>
    </div>
  )
}
