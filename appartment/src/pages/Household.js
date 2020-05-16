import React from 'react';
import householdData from '../utils/householdData';
import { Link } from 'react-router-dom';

function Household(props){
    return(
        <ul classNameName="households">
            {
            householdData.households.map(household => 
                <li>
                    <div classNameName="household">
                    <Link to="/household">{household.name}</Link>
                    </div>
                </li>)
            }
        </ul>
    

    
    )
}

export default Household;