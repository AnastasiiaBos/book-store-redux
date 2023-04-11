import React  from 'react';
import { 
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import { routes } from './Components/routes';


function App() {

  return (
    <Router>
      <NavBar />    
      <Routes>
        {routes.map( (route, index) => <Route path={route.path} element={<route.element />} key={index}/> )} 
      </Routes>
    </Router>
  );
}

export default App;
