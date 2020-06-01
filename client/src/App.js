import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, useParams} from 'react-router-dom';

import NavbarApp from './components/AppNavbar';
import { AuthRouteWrapper } from './components/AuthRouteWrapper';
import { StoreProvider} from './utils/GlobalState';
import { HouseholdProvider } from './utils/HouseholdProvider';


function App() {
  
  return (
    <Router>
      <StoreProvider>  
        <HouseholdProvider>
          <NavbarApp/>
          <AuthRouteWrapper/>
        </HouseholdProvider>
      </StoreProvider>
    </Router> 
  );
}

export default App;
