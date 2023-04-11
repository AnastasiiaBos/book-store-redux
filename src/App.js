import React  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Components/Home/Home';

import Wishlist from './Components/Home/WishlistComponent/Wishlist';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import './App.css';
import Navigation from './Components/Navigation';


function App() {

  return (
    <Router>
      <Navigation />
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
