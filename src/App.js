import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact'
import Home from './Home';

function App() {
  return (
      <Router>
        <nav>
          <div className="navWrapper">
          <h1><span>D</span>y<span>N</span>asty</h1>
          <div>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
          </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element=<Home />/>
          <Route path='/about' element=<About />/>
          <Route path='/contact' element=<Contact />/>
        </Routes>
      </Router>
  );
}

export default App;
