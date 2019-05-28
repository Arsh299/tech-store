import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Cart from './pages/CartPage';
import Contact from './pages/ConatctPage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/Default';

import {Route,Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from  './components/Footer';



class App extends Component {
  render() {
    return (
      <>
      {/* navbar , sidebar , Cart , footer */}
        <Navbar/>
        <Sidebar/>
        <SideCart/>
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/about"  component={About}/>
          <Route path = "/conatct"  component={Contact}/>
          <Route path = "/products" exact component={Products}/>
          <Route path = "/products/:id"  component={SingleProduct}/>
          <Route path = "/cart" component={Cart}/>
          <Route path = "/default" component={Default}/>
        </Switch>
        <Footer/>
      </>
    )
  }
}

export default App