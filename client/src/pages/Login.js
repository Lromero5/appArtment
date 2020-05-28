import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Login() {
    const [state, dispatch] = useStoreContext();
    const [user,setUser] = useState({username: "", password : ""});

    const onChange = event =>{
        setUser({...user, [event.target.name] : event.target.value})
    }

    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault()
            API.login(user).then(function(data) {
            const userId = data.data.user._id;
            history.push('/myhomescreen/' + userId )
            dispatch({
                type: LOGIN,
                _id: userId
            })
            console.log("just logged in and this is our user id", userId)
        })

    }
    return (

        <div className="container my-5 bg-light p-5">
            <h2 className="text-center">Login</h2>
            <form className=" mt-4 col-6">
                <div className="form-group">
                    <label>username </label>
                    <input name="username"  onChange={onChange} type="username" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" onChange={onChange} type="password" className="form-control" placeholder="Password" />
                </div>


                <button onClick={handleClick} className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Submit</button>

            </form>
        </div>
    );
}

export default Login;