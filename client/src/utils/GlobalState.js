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
            return {
                ...state,
                loggedin: true,
                user: action._id
            };
        case LOGOUT:
            return {
                ...state,
                loggedin: false,
                user: ""
            };
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        loggedin: false,
        userId: ""
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
