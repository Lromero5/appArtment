import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Account from './pages/Account';
import HomeScreen from './pages/HomeScreen';
import LogOut from './pages/LogOut';
import Navbar from './components/Navbar';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
    <div className="grid-container">  
              <Route path="/" exact={true} component={HomeScreen}></Route> 
              <Route path="/household/:id" component={Account}></Route>
              <Route path='/logout' component={LogOut}></Route>
    </div>
    </div>
    </Router> 
  );
}

export default App;
