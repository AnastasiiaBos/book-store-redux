import React  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import RoutesComponent from './Components/RoutesComponent';


function App() {

  return (
    <Router>
      <NavBar />
      <RoutesComponent />
    </Router>
  );
}

export default App;
