import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import favoritesIcon from './img/favorites.png';
import Cart from './Components/Home/CartComponent/Cart';
import Wishlist from './Components/Home/WishlistComponent/Wishlist';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  return (
      <Router>
        <nav>
          <div className="navWrapper">
          <Link to='/'  className='logo'>
            <h1><span>D</span>y<span>N</span>asty</h1>
          </Link>
          <div className='menu'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <Link to='/wishlist' className='cartWrapper'>
              <img className='icon iconFavorites' src={favoritesIcon} alt="Wish list"/>
            </Link>
            <Cart />
          </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element=<Home /> />
          <Route path='/about' element=<About /> />
          <Route path='/contact' element=<Contact />/>
          <Route path='/wishlist' element=<Wishlist />/>
        </Routes>
      </Router>
  );
}

export default App;
