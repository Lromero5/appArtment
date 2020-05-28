import React from "react";
import Footer from "../components/Footer";
import Members from "../components/InfoMembers";
import Finance from "../components/Finance/Finance"
import Calendar from "../components/Calendar";
import Chores from "../components/Chores/Chores";

// import householdData from '../utils/householdData';

function Account(props) {
  console.log(props.match.params.id);
  // const house = householdData.household.find(home => home.id === props.match.params.id)
  return (
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
  );
}

export default Account;
