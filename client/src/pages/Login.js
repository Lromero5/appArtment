// import React, {useState} from 'react';
// import API from '../utils/API'
// //newcode
// // import {withRouter} from 'react-router-dom'
// import { LOGIN } from "../utils/actions";
// import { useStoreContext } from "../utils/GlobalState";



// function Login(props){
//     const [dispatch] = useStoreContext();
//     const [user,setUser] = useState({username: "", password : ""});

//     const onChange = event =>{
//         setUser({...user, [event.target.name] : event.target.value})
//     }

//     const onSubmit = e =>{
//         e.preventDefault()
//         API.login(user).then(function(data) {
//             console.log('we logged in and got this back ?', data)
//             // console.log('these r our props!!!', props)
//             props.history.push('/')
//             dispatch({
//                 type: LOGIN,
//                 _id: data.data.user._id
//             })
//         })
//     }

// // console.log('this is our state', user)
//     return(
//         <div>
//         <form >
//             <h3>Please sign in</h3>
//             <label htmlFor="username" className="sr-only">Username: </label>
//             <input type="text" 
//                    name="username" 
//                    onChange={onChange} 
//                    className="form-control" 
//                    placeholder="Enter Username"/>
//             <label htmlFor="password" className="sr-only">Password: </label>
//             <input type="password" 
//                    name="password" 
//                    onChange={onChange} 
//                    className="form-control" 
//                    placeholder="Enter Password"/>
            
//         </form>

//         <button  onClick={onSubmit}className="btn btn-lg btn-primary btn-block">Log in </button>
//     </div>
//     )
// }

// export default Login;

import React, {useRef} from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Login() {
    const [state, dispatch] = useStoreContext();
    const usernameRef = useRef();
    const passRef = useRef();

    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault()
        console.log("you got clicked")
        API.login({ username: usernameRef.current.value, password: passRef.current.value })
            .then(user => {
                //user.data.success = true if login succesfull
                history.push("/myhomescreen");
                dispatch({
                    type: LOGIN,
                    _id: user.data._id
                })
            });
    }
    return (

        <div className="container my-5 bg-light p-5">
            <h2 className="text-center">Login</h2>
            <form className=" mt-4 col-6">
                <div className="form-group">
                    <label>username </label>
                    <input ref={usernameRef} type="username" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input ref={passRef} type="password" className="form-control" placeholder="Password" />
                </div>


                <button onClick={handleClick} className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Submit</button>

            </form>
        </div>
    );
}

export default Login;