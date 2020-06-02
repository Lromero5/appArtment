import React  from "react";
import Finance from "../components/Finance/Finance";
import Chores from "../components/Chores/Chores";
import { HouseholdConsumer } from "../utils/HouseholdProvider";
import Members from "../components/Members";
import CardColumns from 'react-bootstrap/CardColumns';


function Account(){
    return(
        
        <HouseholdConsumer>
            
               {(context) => {
                return(
                    
                    <CardColumns>
                        <Members context={context}/>
                        <Finance context={context}/>
                        <Chores context={context}/>
                    </CardColumns>
                )
            }}
        </HouseholdConsumer>
    );
}

export default Account;