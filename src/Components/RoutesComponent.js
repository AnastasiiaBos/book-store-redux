import React  from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Wishlist from './Home/WishlistComponent/Wishlist';
import Contact from './Contact/Contact';
import About from './About/About';


function RoutesComponent() {

  return (
    <Routes>
      <Route path='/' element=<Home /> />
      <Route path='/about' element=<About /> />
      <Route path='/contact' element=<Contact />/>
      <Route path='/wishlist' element=<Wishlist />/>
    </Routes>
  );
}

export default RoutesComponent;
