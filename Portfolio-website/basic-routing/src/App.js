import logo from './logo.svg';
import React from 'react';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
  
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <p>ho</p>
      </ul>
     </nav>
     <Routes>
      <Route path = "/" element={<Home/ >}/> 
      <Route path = "/About" element={<About />}/> 
      <Route path = "/Contact" element={<Contact />}/> 
    </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
