import React, {createContext, useReducer} from "react";
import appReducer from "./appReducer"

//Initial State
const initialState = {
    transactions:[
          { id: 1, text: 'Rent', amount: -500 },
          { id: 2, text: 'Light bill', amount: -50 },
          { id: 3, text: 'Groceries', amount: -100 },
          { id: 4, text: 'Gas bill', amount: -40 },
          { id: 5, text: "Tony's contribution", amount: 300}
        ]
}
//create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
    const[state, dispatch] = useReducer(appReducer, initialState);
//actions
function deleteTransaction(id){
    dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
    });
}

function addTransaction(transaction){
    dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
    });
}




    return(<GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}