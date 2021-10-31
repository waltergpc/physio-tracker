import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Home from '../components/home'
import NavBar from '../components/layout';
import Profile from '../components/profile';


const App = () => {
  return (
    <Router>
      <NavBar>
      <Switch>
        <Route exact strict path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route  exact strict path='/profile'>
          <Profile />
        </Route>
      </Switch>
      </NavBar>
    </Router>
  )
}

export default App



