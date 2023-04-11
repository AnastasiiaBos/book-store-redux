import Home from './Home/Home';
import Wishlist from './Home/WishlistComponent/Wishlist';
import Contact from './Contact/Contact';
import About from './About/About';


export const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/about',
    element: About,
  },
  {
    path: '/contact',
    element: Contact,
  },
  {
    path: '/wishlist',
    element: Wishlist,
  }
];