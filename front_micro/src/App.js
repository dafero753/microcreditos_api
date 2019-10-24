import React from 'react'
import { Router, Route } from "react-router"
import createBrowserHistory from "history/createBrowserHistory"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './components/Layout'
import Home from './components/Home'
import Credits from './components/Credits'
import Contacts from './components/Contacts'
import Users from './components/Users'
import SingUp from './components/SingUp'
import './App.scss'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App-container">
      <Router history={history}>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/users" component={Users}></Route>
        <Route exact path="/credits" component={Credits}></Route>
        <Route exact path="/contacts" component={Contacts}></Route>
        <Route exact path="/sing-up" component={SingUp}></Route>
      </Router>
    </div>
  );
}

export default App;
