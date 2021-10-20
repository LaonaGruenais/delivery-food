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

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
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
        </Router>

      </div>
    )
  }
}

export default App
