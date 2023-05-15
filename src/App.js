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
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          
             <PrivateRoute path="/details/:id" >
               <Details/>
             </PrivateRoute>
          
          <Route path="/login">
            <Login/>
          </Route>

          
              <PrivateRoute path="/">
                 <Home/>
              </PrivateRoute>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
