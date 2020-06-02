import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function JoinHousehold({context}){
    const {addUserToHousehold, households} = context;

    const [isValid, setIsValid] = useState(false);

    const [newHousehold, setnewHousehold] = useState({});

    const handleChange = (target) => {
        const {name, value} = target;
        const match = households.filter(({name, _id}) => (value === name || value === _id))
        setIsValid(match.length>0)
        setnewHousehold({
            [name]: value
        });
    }

    const onSubmit = () => {
        addUserToHousehold(newHousehold._id);
        // setValidated(true);
    }

    return (
        <Card >
            <Card.Header>Join A Household</Card.Header>
            <Card.Body>
            <Form>
            <Form.Group>
                <Form.Label>Enter Household ID From Email Invite</Form.Label>
                <Form.Control 
                    type="text" size="lg" name="_id" custom 
                    onChange={(e) => handleChange(e.target)}
                     />
              
            </Form.Group>
            <Button variant="join" disabled={!isValid} onClick={onSubmit}>
                Join Household
            </Button>
            </Form>
            </Card.Body>        
        </Card>
    )
}

