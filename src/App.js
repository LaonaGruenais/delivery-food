import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Restaurants from './pages/Restaurants'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Restaurant from './pages/Restaurant'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'
import Order from './pages/Order'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <CartProvider>
            <AuthProvider>
              <Header />
              <Cart />
              <Switch>
                <Route path='/cancel'>
                  <Cancel />
                </Route>
                <Route path='/success'>
                  <Success />
                </Route>
                <Route path='/order'>
                  <Order />
                </Route>
                <Route path='/restaurant/:id'>
                  <Restaurant />
                </Route>
                <Route path='/auth'>
                  <Auth />
                </Route>
                <Route path='/restaurants'>
                  <Restaurants />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </AuthProvider>
          </CartProvider>
        </Router>

      </div>
    )
  }
}

export default App
