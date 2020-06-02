import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/logofinal.png';
import { LOGOUT } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";


function AppNavbar(){
    const [state, dispatch] = useStoreContext();   

    return (
        <Navbar bg={"light"} className="pr-5 align-items-center">
            <Navbar.Brand href="/myhomescreen">
                <img src={logo} alt="logo" width='230' height='150'></img>
            </Navbar.Brand>
            {
                !state.loggedin ? (
                    <Nav className="ml-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Nav.Link href="#" onClick={()=>{
                            dispatch({
                                type: LOGOUT
                            })
                        }}>Logout</Nav.Link>
                    </Nav>
                )
            }
        </Navbar>
    );
}   


export default AppNavbar