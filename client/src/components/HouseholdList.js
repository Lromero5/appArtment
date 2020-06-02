import React  from "react";
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

export function HouseholdList({context}){
    const {myHouseholds, removeHouseHold, setCurrentHousehold} = context;
    const history = useHistory();
    const handleSelectHouse = ({_id}) => {
        setCurrentHousehold(_id);
        history.push("/household");
    }

    return (
        <Card>
            <Card.Header>Your Households</Card.Header>
            <Card.Body>
                {
                    !myHouseholds.length ? 
                    ( <h3>You don't belong to any households yet</h3> ) :
                    (
                        myHouseholds.map(house => (
                            <div key={house._id}>
                                <div className="household">
                                    <button className="btn-1" 
                                        onClick={() => { handleSelectHouse(house)}}
                                    >{house.name}</button>
                                </div>
                                <span>                            
                                    <button 
                                        onClick={()=> removeHouseHold(house)} 
                                        className="delete-btn">
                                            x
                                    </button>
                                </span>
                            </div>
                        ))
                    )
                }
            </Card.Body>
        </Card>
    )
}