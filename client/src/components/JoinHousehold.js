import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function JoinHousehold({context}){
    const {currentUser, addUserToHousehold, households} = context

    const [newHousehold, setnewHousehold] = useState({});

    const handleChange = ({name, value}) => {
        setnewHousehold({
            [name]: value
        });
    }

    const onSubmit = () => {
        addUserToHousehold(newHousehold._id);
    }

    return (
        <Card>
            <Card.Header>Feeling FOMO?</Card.Header>
            <Card.Body>
            <Form>
            <Form.Group>
                <Form.Label>Join a Household</Form.Label>
                <Form.Control as="select" size="lg" onChange={(e) => handleChange(e.target)} name="_id" custom>
                    <option>
                        select
                    </option>
                {
                    households.map((household)=>{
                    return (
                        <option key={household._id} value={household._id} >
                        {household.name}
                        </option>
                    )
                    })
                }
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>
                Join Household
            </Button>
            </Form>
            </Card.Body>        
        </Card>
    )
}





