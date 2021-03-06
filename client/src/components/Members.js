import React from 'react';
import EmailForm from './EmailForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Members({context}){
    
    const {members, deleteMember,houseID } = context;
  

  
    return (
        <>
        <Card>
            <Card.Header>Household Members</Card.Header>
            <Card.Body>
                {<h2>Your Household ID is: {houseID} </h2>}
                {                    
                    !members.length ? 
                    ( <h3>You don't belong to any households yet</h3> ) :
                    (
                        members.map(member => (
                            <div key={member._id}>
                                <li>
                                    {member.displayName} 
            
                                    <Button 
                                        onClick={()=> deleteMember(member._id)}>
                                            Delete Member
                                    </Button>
                                    </li>
                            </div>
                        ))
                    )
                }

            </Card.Body>
        </Card>
        <Card>
            <Card.Header>Want to add a roomate?</Card.Header>
            <Card.Body>
                <EmailForm context={context}/>
            </Card.Body>
        </Card>
        </>
    )
}

export default Members;



