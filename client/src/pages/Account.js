import React from 'react';
import Footer from '../components/Footer';
import Members from '../components/InfoMembers'
import Finances from '../components/Finances'
import Calendar from '../components/Calendar'
// import householdData from '../utils/householdData';


function Account(props){
  
    return(
    <div className="card">
        <div className="card">
        <div className="households">
        </div>
        <Members/>
        </div>
        <div className="card">
        <Calendar/>
        </div>
        <div className="card">
        <Finances/>
        </div>
        <Footer/>
    </div>
    )
}

export default Account;