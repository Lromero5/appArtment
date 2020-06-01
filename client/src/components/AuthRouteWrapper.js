import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useStoreContext } from "../utils/GlobalState";
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Account from '../pages/Account';
import HomeScreen from '../pages/HomeScreen';
import {LOGOUT } from "../utils/actions";

export const AuthRouteWrapper = ()=>{
    const [state, dispatch] = useStoreContext();

    const { pathname } = useLocation();

    return (
        <div className="grid-container"> 
            <Route path='/login' exact> <Login/> </Route>
            <Route path='/signup' exact> <SignUp/> </Route>
            <Route path="/myhomescreen" exact>
                {
                    state.loggedin ? <HomeScreen/> : <Redirect to="/login"/>
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