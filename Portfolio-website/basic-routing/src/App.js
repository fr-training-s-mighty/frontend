import logo from './logo.svg';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
  
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
     <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
     </nav>
    <Switch>
      <Route exact path = "/" Component={Home}/> 
    </Switch>
    <Switch>
      <Route exact path = "/About" Component={About}/> 
    </Switch>
    <Switch>
      <Route exact path = "/Contact" Component={Contact}/> 
    </Switch>
    </div>
  );
}

export default App;
