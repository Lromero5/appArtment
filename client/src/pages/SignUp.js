// import React, {useState} from 'react';
// import API from '../utils/API'


// function SignUp(props){

//     const [user,setUser] = useState({username: "", password : "", email : ""});

//     const onChange = event =>{
//         // console.log('we r typing!!', event.target.value)
//         // console.log('this is who to update!!', event.target.name)
//         setUser({...user, [event.target.name] : event.target.value})
//     }

//     const onSubmit = e =>{
//         e.preventDefault()
//         API.signup(user).then(function(data) {
//             // console.log('we logged in and got this back ?', data)
//             // console.log('these r our props!!!', props)
//             props.history.push('/login')
//         })
//     }


//     return(
//     <div>
//         <div>
//             <form >
//                 <h3>Please Register</h3>
//                 <label htmlFor="username" className="sr-only">Username: </label>
//                 <input type="text" 
//                        name="username" 
//                        value={user.username}
//                        onChange={onChange} 
//                        className="form-control" 
//                        placeholder="Enter Username"/>
//                 <label htmlFor="password" className="sr-only">Password: </label>
//                 <input type="password" 
//                        name="password"
//                        value={user.password} 
//                        onChange={onChange} 
//                        className="form-control" 
//                        placeholder="Enter Password"/>
//                 <label htmlFor="role" className="sr-only">Role: </label>
//                 <input type="text" 
//                        name="email"
//                        value={user.email}  
//                        onChange={onChange} 
//                        className="form-control" 
//                        placeholder="Enter email"/>
//             </form>
//             <button onClick={onSubmit} className="btn btn-lg btn-primary btn-block">Register</button>
//         </div>
//     </div>
//     )
// }

// export default SignUp;

import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Signup() {
    const [state, dispatch] = useStoreContext();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        API.signup({ username: usernameRef.current.value, password: passRef.current.value, email: emailRef.current.value, })
            .then(user => {
                console.log("API RESPONSE");
                console.log(user)
                history.push("/myhomescreen");
                dispatch({
                    type: LOGIN,
                    _id: user.data._id
                })
            });
      
    }

    return (

        <div className="container my-5 bg-light p-5">
            <h2 className="text-center">SignUp</h2>
            <form className="mt-4 col-6">
                <div className="form-group">
                    <label>Username </label>
                    <input ref={usernameRef} type="username" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input ref={passRef} type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input ref={emailRef} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>


                <button onClick={handleClick} className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Submit</button>

            </form>
        </div>
    );
}

export default Signup;