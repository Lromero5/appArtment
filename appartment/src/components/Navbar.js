import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <header className="header">
            <div className="brand">
                <Link to="/" src="/images/house.png" alt="logo-appartment" width="80" height="80"></Link>
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
