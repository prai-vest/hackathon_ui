import React from 'react'
import { hot } from 'react-hot-loader/root'
import Home from 'Components/Home'
import Test from 'Components/Test'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import 'bulma'
import './App.scss'


function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default hot(App)
