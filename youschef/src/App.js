import React from 'react';
import { Router, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Delivery from './components/Delivery/Delivery'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Footer />
      </header>
    </div>
  );
}

export default App;
