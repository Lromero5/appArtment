import React, { useState } from 'react';
import { GlobalConsumer } from './context/globalState';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const AddTransaction = ({context}) => {
  const {addTransaction, members} = context
  
  
  const [newTransaction, setNewTransaction] = useState({
    name:"",
    amount:0,
    isExpense: false,
    user: ""
  });
  
  const handleChange = ({name, value}) => {

    newTransaction.isExpense = (name != "amount") ? newTransaction.isExpense : 
                               (+value < 0) ? true : false;

    setNewTransaction({
      ...newTransaction,
      [name]:(name === "amount") ? +value : value
    });
  }

  const onSubmit = () => {
    addTransaction(newTransaction);
  }

  return (
        <Card>
          <Card.Header>Add a New Transaction</Card.Header>
          <Card.Body>
            <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>User</Form.Label>
              <Form.Control as="select" size="lg" onChange={(e) => handleChange(e.target)} name="user"custom>
                <option>Select User</option>
                { 
                  !members.length ?
                  (<h3>No Members Recorded</h3>) :
                  (
                    members.map((member)=>{
                      return (
                        <option key={member._id} value={member._id} >
                          {member.displayName}
                        </option>
                      )
                    })
                  )
                }
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" onChange={(e) => handleChange(e.target)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control name="amount" type="text" onChange={(e) => handleChange(e.target)} />
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>
              Add Transaction
            </Button>
          </Form>
          </Card.Body>        
        </Card>
  )
}
