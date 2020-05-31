//newuse effct
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logofinal.png';
//newcode
import { LOGOUT } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";


function Navbar(){
//newcode
    const [state, dispatch] = useStoreContext();

    function logout() {
        dispatch({
            type: LOGOUT
        })
    }

    useEffect(() => {

    }, []);

    function getNav(loggedin) {
        console.log(" Navbar- are  we logged in?", loggedin)
        if (loggedin) {
            return (
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/myhomescreen/:id">
                        My Home Screen
                    </Link>
                    <Link to="/household/:id"> My Household</Link>
                    <Link className="nav-item nav-link" onClick={() => logout()} to="/">
                        Logout
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">
                        Home
                    </Link>
                    <Link className="nav-item nav-link" to="/Login">
                        Login
                </Link>
                    <Link className="nav-item nav-link" to="/Signup">
                        Signup
                </Link>
                </div>
            );
        }
    }

    return (
        <header className="header">
            <div className="brand">
                 <Link to="/">
                     <img src={logo} alt="logo" width='230' height='150'></img>
                 </Link>
             </div>
             <div className="header-links">
                 <Link to="/">Home</Link>
                 <br/>
                    {getNav(state.loggedin)}

              </div>
         </header>
    );
}   


export default Navbar