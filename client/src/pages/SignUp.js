import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Signup() {
    const [state, dispatch] = useStoreContext();
    const [user,setUser] = useState({username: "", password : "", email : ""});


    const onChange = event =>{
        // console.log('this is who to update!!', event.target.name)
        setUser({...user, [event.target.name] : event.target.value})
    }

    const handleClick = (e) => {
        e.preventDefault();
        API.signup(user)
            .then(function({data}) {
             
                const {_id, displayName, household_id, email, username} = data
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
                console.log("Just signed up and this is our users id", user._id);
            })
    }

    return (
        (state.loggedin) ? <Redirect to="/myHomescreen"/> :
        <div className="container my-5 bg-light p-5">
            <h2 className="text-center">SignUp</h2>
            <form className="mt-4 col-6">
                <div className="form-group">
                    <label>Display Name</label>
                    <input name="displayName" onChange={onChange} type="username" className="form-control" placeholder="Enter display name" />
                </div>
                <div className="form-group">
                    <label>Username </label>
                    <input name="username" onChange={onChange} type="username" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" onChange={onChange} type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" onChange={onChange} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>


                <button onClick={handleClick} className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Submit</button>

            </form>
        </div>
    );
}

export default Signup;