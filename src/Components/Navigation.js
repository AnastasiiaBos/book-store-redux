import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import favoritesIcon from './../img/favorites.png';
import Cart from './Home/CartComponent/Cart';

function Navigation() {
  const [navIsClosed, setNavigationIsClosed] = useState(true);

  return (
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
  );
}

export default Navigation;
