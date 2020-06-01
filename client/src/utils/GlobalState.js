import React, { createContext, useReducer, useContext } from "react";
import {
    LOGIN,
    LOGOUT,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            const user = {
                ...state,
                loggedin: true,
                user: action.user
            }
            localStorage.setItem("user", JSON.stringify(user))
            return user
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                loggedin: false,
                user: {}
            };
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const lastUser = localStorage.getItem("user");
    const user = (!lastUser) ? 
        { loggedin:false, user:{} } : JSON.parse(lastUser);
   
    const [state, dispatch] = useReducer(reducer, user);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

const StoreConsumer = StoreContext.Consumer
export { StoreProvider, StoreConsumer, useStoreContext };
