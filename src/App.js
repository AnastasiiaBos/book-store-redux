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
import Home from './Components/Home/Home';
import favoritesIcon from './img/favorites.png';
import Cart from './Components/Home/CartComponent/Cart';

function App() {
  return (
      <Router>
        <nav>
          <div className="navWrapper">
          <h1><span>D</span>y<span>N</span>asty</h1>
          <div className='menu'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <div className='cartWrapper'>
              <img className='icon iconFavorites' src={favoritesIcon} alt="Wish list"/>
            </div>
            <Cart />
          </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element=<Home /> />
          <Route path='/about' element=<About /> />
          <Route path='/contact' element=<Contact />/>
        </Routes>
      </Router>
  );
}

export default App;
