import logo from './logo.svg';
import './App.css';
// import { Link, Router } from 'react-router-dom';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Email from './Email';
import Phone from './Phone';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to="/">Unhealthy Hub</Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/about">About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}>
          <Route path='email' element={<Email />} />
          <Route path='/phone' element={<Phone />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
