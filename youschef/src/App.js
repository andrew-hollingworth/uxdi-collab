import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import OrderForm from './components/OrderForm/OrderForm'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCounter: null,
    }
  }

  handleAddToCart = () => {
    let newState = this.state.cartCounter + 1
    this.setState(prevState => ({
      cartCounter: newState,
    }))
  }


  render() {
    return (
      <div>
        <Header
          cartCounter={this.state.cartCounter} />
        <OrderForm
          handleAddToCart={this.handleAddToCart} />
        <Footer />
      </div>
    )
  }
}
