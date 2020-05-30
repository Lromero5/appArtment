import React, {createContext, useState} from "react";
import appReducer from "./appReducer";
import API from "../../../utils/API";

//Initial State
// const initialState = {
//     transactions:[
//           { id: 1, text: 'Rent', amount: -500 },
//           { id: 2, text: 'Light bill', amount: -50 },
//           { id: 3, text: 'Groceries', amount: -100 },
//           { id: 4, text: 'Gas bill', amount: -40 },
//           { id: 5, text: "Tony's contribution", amount: 300}
//         ]
// }
//create context
export const GlobalContext = createContext()

// provider component
export const GlobalProvider = ({ children }) => {
    // const[state, dispatch] = useReducer(appReducer, initialState);
    const [transactions, setTransactions] = useState([])
    const [house_id, setHouse_id] = useState()
    const [user_id, setUser_id] = useState()
//actions
function deleteTransaction(id){
//     dispatch({
//         type: "DELETE_TRANSACTION",
//         payload: id
//     });
}
const getTransactions = async(house_id) => {
    const res= await API.getTransactions(house_id);
    console.log(res.data) 
    
    //  setTransactions(res.data)
}
const addTransaction = async(house_id,newTransaction)=>{
    await API.createTransaction(house_id,newTransaction);
   getTransactions(house_id)
    
}
const setHousehold = async(house_id) => {
    setHouse_id(house_id);
    getTransactions(house_id)
}




    return(<GlobalContext.Provider value={{
        transactions, 
        deleteTransaction,
        addTransaction,
        getTransactions,
        house_id,
        user_id,
        setUser_id,
        setHousehold
    }}>
        {children}
    </GlobalContext.Provider>)

}