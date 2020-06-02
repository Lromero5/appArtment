import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import { HouseholdConsumer } from '../utils/HouseholdProvider';
import { CreateHousehold } from '../components/CreateHousehold';
import { JoinHousehold } from '../components/JoinHousehold';
import { HouseholdList } from '../components/HouseholdList';

function HomeScreen(props){
    return(
        <HouseholdConsumer>
            {(context) => {
                return(
                    <CardDeck>
                        <HouseholdList context={context}/>
                        <CreateHousehold context={context}/>
                        <JoinHousehold context={context}/>
                    </CardDeck>
                )
            }}
        </HouseholdConsumer>
    )
}

export default HomeScreen;