import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/house.png';

function Navbar(){
    return(
        <header className="header">
            <div className="brand">
                <Link to="/">
                    <img src={logo} alt="logo" width='70' height='60'></img>
                </Link>
            </div>
            <div className="header-links">
                <Link to="/">Home</Link>
                <br/>
                <Link to="/logout/">Log Out</Link>
             </div>
        </header>
    )
}

export default Navbar
