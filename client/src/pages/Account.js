import React, { useState } from 'react';
import Footer from "../components/Footer";
import Members from "../components/InfoMembers";
import Finance from "../components/Finance/Finance";
import Calendar from "../components/Calendar";
import Chores from "../components/Chores/Chores";
import { GlobalProvider } from "../components/Finance/context/globalState";



// import householdData from '../utils/householdData';

function Account(props) {

 const houseID = props.match.params.id;
  
  // const house = householdData.household.find(home => home.id === props.match.params.id)
  return (
    <GlobalProvider houseID={houseID}>
      <div>
        <div className="head-title">
          <h1>Hi user.name!</h1>
        </div>
        <Members />
        <Finance/>
        <Chores />      
        <Calendar /> 
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default Account;
