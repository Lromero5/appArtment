import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { useStoreContext } from "../utils/GlobalState";
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Account from '../pages/Account';
import HomeScreen from '../pages/HomeScreen';
import Main from '../pages/Main'

export const AuthRouteWrapper = ()=>{
    const [state, dispatch] = useStoreContext();


    return (
        <div className="grid-container"> 
            <Route path='/' exact> <Main/> </Route>
            <Route path='/login' exact> <Login/> </Route>
            <Route path='/signup' exact> <SignUp/> </Route>
            <Route path="/myhomescreen" exact>
                {
                    state.loggedin ? <HomeScreen/> : <Redirect to="/"/>
                }
            </Route> 
            <Route path="/household" exact>
                {
                    state.loggedin ? <Account/> : <Redirect to="/login"/>
                }
            </Route>
        </div>
    )
}