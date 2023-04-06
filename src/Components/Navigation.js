import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home/Home';
import favoritesIcon from './../img/favorites.png';
import Cart from './Home/CartComponent/Cart';
import Wishlist from './Home/WishlistComponent/Wishlist';
import Contact from './Contact/Contact';
import About from './About/About';

function Navigation() {
  const [navIsClosed, setNavigationIsClosed] = useState(true);

  return (
      <Router>
        <nav className={`${navIsClosed? "navClosed" : "navOpened"}`}>
          <div className="navWrapper">
            <Link to='/'  className='logo'>
              <h1><span>D</span>y<span>N</span>asty</h1>
            </Link>
            <div className='menu'>
              <button onClick={() => setNavigationIsClosed(!navIsClosed)} className="navToggle" type="button" aria-label="Open menu"></button>
              <div className="mainMenu">
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/contact' className='link'>Contact</Link>
              </div>
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

export default Navigation;