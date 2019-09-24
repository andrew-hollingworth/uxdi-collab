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
      ingredients: [{
        name: 'Chicken Breast',
        value: true,
      }, {
        name: 'Spaghetti',

      }]
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/delivery' component={Delivery} />
          <Route path='/order' render={() =>
            <OrderForm
              meals={this.state.meals} />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
