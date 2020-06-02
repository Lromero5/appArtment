import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Login() {
    const [state, dispatch] = useStoreContext();
    const [user,setUser] = useState({});

    const handleChange = ({name, value}) =>{
        setUser({...user, [name] : value})
    }

    const handleClick = (e) => {
        e.preventDefault()
            API.login(user).then(function({data}) {
            const {_id, displayName, household_id, email, username} = data.user
            const user = {
                _id,
                displayName,
                household_id,
                email,
                username
            }
            dispatch({
                type: LOGIN,
                user: user
            })
        })

    }
    return (
            (state.loggedin) ? <Redirect to="/myHomescreen"/> :
                <Card className="mt-5 mx-auto">
                    <Card.Header>Login</Card.Header>
                    <Card.Body className="p-auto">
                        <Form className="p-4">
                            <Form.Group>
                                <Form.Label>UserName</Form.Label>
                                <Form.Control name="username" type="text" onChange={(e) => handleChange(e.target)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" onChange={(e) => handleChange(e.target)} />
                            </Form.Group>
                            <Button className="mt-4" variant="primary" onClick={handleClick}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
    );
}

export default Login;