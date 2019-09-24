import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Delivery from './components/Delivery/Delivery'
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
        <Switch>
          <Route path='/delivery' component={Delivery} />
          <Route path='/order' render={() =>
            <OrderForm
              handleAddToCart={this.handleAddToCart} />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
