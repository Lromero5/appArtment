import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios'


class EmailForm extends Component {

    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        
        

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value})
   }

    async handleFormSubmit(event){
        event.preventDefault()
        const { name, email, message } = this.state

         await axios.post('/api/form', {
            name,
            email,
            message,
        })
        .then(done())

        function done(){
            alert('Email has been sent')
        }
    }
    
   

    render () {
      
        return(
            <Form onSubmit={this.handleFormSubmit} className="form">
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Enter roommate name here"
                    onChange={this.handleInputChange}
                />               
            </FormGroup>
    
            <FormGroup>
            <Label for="email">Email:</Label>
            <Input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={this.handleInputChange}
            />               
            </FormGroup>
    
            <FormGroup>
            <Label for="message">House ID:</Label>
            <Input
                type="textarea"
                name="message"
                placeholder="Type your home ID here"
                onChange={this.handleInputChange}
            />               
            </FormGroup>
            <Button className="button">Submit</Button>
            </Form>
        )
    }
}

export default EmailForm