import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Account from './pages/Account';
import HomeScreen from './pages/HomeScreen';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
//newcode
import { StoreProvider } from './utils/GlobalState';
import Main from './pages/Main';


function App() {

  return (
    <Router>
      <div>
        {/* newcode */}
      <StoreProvider>  
      <Navbar/>
    <div className="grid-container">  
              <Route path="/" exact={true} component={Main}></Route> 
              <Route path="/myhomescreen/:id" exact={true} component={HomeScreen}></Route> 
              <Route path="/household/:id" component={Account}></Route>
              {/* <Route path='/logout' component={LogOut}></Route> */}
              <Route path='/login' component={Login}></Route>
              <Route path='/signup' component={SignUp}></Route>
    </div>
    </StoreProvider>
    </div>
    </Router> 
  );
}

export default App;
