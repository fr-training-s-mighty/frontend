import logo from './logo.svg';
import React from 'react';
// import { Route, Switch, Link } from 'react-router-dom';
import { Route, Routes, Link, Router } from 'react-router-dom';
  
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <Router>
    <div className="App">
     <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
     </nav>
    <Routes>
      <Route exact path = "/" element={<Home/>}/> 
      <Route exact path = "/About" element={<About/>}/> 
      <Route exact path = "/Contact" element={<Contact/>}/> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
