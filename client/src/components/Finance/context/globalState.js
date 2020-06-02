import React, {createContext, useState, useEffect} from "react";
import API from "../../../utils/API";


export const GlobalContext = createContext({

})


export const GlobalProvider = ({ houseID, children }) => {
    const [transactions, setTransactions] = useState([])
    const [members, setMembers] = useState([])
    const [user_id, setUser_id] = useState()

useEffect(() => {
    getTransactions();
},[houseID])


const deleteTransaction= async(transaction)=>{
    console.log(transaction);
    await API.deleteTransaction(houseID, transaction);
    getTransactions();

}
const getTransactions = async() => {
    const {transactions, members} = await API.getTransactions(houseID);
    setMembers(members)
    setTransactions(transactions)
}
const addTransaction = async(newTransaction)=>{
    console.log("from GlobalState:")
    console.log(newTransaction);
    await API.createTransaction(houseID, newTransaction);
   getTransactions()
    
}



    return(
    <GlobalContext.Provider value={{
        transactions, 
        deleteTransaction,
        addTransaction,
        getTransactions,
        houseID,
        user_id,
        setUser_id,
        members
    }}>
        {children}
    </GlobalContext.Provider>
    )

}

export const GlobalConsumer = GlobalContext.Consumer; 