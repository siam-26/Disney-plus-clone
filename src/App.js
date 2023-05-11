import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import Details from './Components/Details';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/details" >
            <Details/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
