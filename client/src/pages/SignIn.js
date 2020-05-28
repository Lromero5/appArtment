import React, {useState,useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../components/Message';
import {AuthContext} from '../Context/AuthContext';

function SignIn(props){

    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            // console.log('WE JUST LOGGED IN and got this back',data);
            const { isAuthenticated,user,message} = data;
            // console.log('this is users and isAutheticatd' , user, isAuthenticated)
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/');
            }
            else
                setMessage(message);
        });
        
    }


    return(
        <div>
         <form onSubmit={onSubmit}>
            <h3>Please sign in</h3>
            <label htmlFor="username" className="sr-only">Username: </label>
            <input type="text" 
                   name="username" 
                   onChange={onChange} 
                   className="form-control" 
                   placeholder="Enter Username"/>
            <label htmlFor="password" className="sr-only">Password: </label>
            <input type="password" 
                   name="password" 
                   onChange={onChange} 
                   className="form-control" 
                   placeholder="Enter Password"/>
            <button className="btn" 
                    type="submit">Log in </button>
        </form>
        {message ? <Message message={message}/> : null}
    </div>
    )
}

export default SignIn;