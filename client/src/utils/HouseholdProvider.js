import React, {createContext, useState, useEffect} from "react";
import API from "./API";
import { useStoreContext } from "./GlobalState";


export const HouseholdContext = createContext({})


export const HouseholdProvider = ({children }) => {
    const [households, setHouseholds] = useState([])
    const [myHouseholds, setMyHouseholds] = useState([])
    const [transactions, setTransactions] = useState([])
    const [members, setMembers] = useState([])
    const [chores, setChores] = useState([])
    const [state, dispatch] = useStoreContext();
    const [currentUser, setCurrentUser] = useState(state.user);
    const [houseID, setHouseID] = useState("")

useEffect(() => {
    setCurrentUser(state.user);
    getHouseholds();
},[state.user])


const getHouseholds = async() => {
    const {data} = await API.getHouseholds();
    setHouseholds(data);

    const myHList = data.filter( house => {
        const match = house.members.filter(member => member._id === state.user._id);
        return match.length > 0;
    });

    setMyHouseholds(myHList);

    
    if (myHList.length > 0){
        setCurrentHousehold(myHList[0]._id); 
    }
}

const setCurrentHousehold = async(id) => {
    setHouseID(id);
    await getTransactions(id);
}

const deleteTransaction= async(transaction)=>{
    await API.deleteTransaction(houseID, transaction);
    getTransactions();

}

const getTransactions = async(id) => {
    id = (!id) ? houseID : id
    const {transactions, members, chores} = await API.getTransactions(id);
    setMembers((members) ? members : [])
    setTransactions((transactions) ? transactions : [])

    
}
const addTransaction = async(newTransaction)=>{
    await API.createTransaction(houseID, newTransaction);
   getTransactions()
    
}



const createHousehold = async(newHousehold) => {
    newHousehold.members = (currentUser) ? [currentUser._id] : [];
    await API.createHousehold(newHousehold);
    getHouseholds();
}

const addUserToHousehold = async(house_id) => {
    await API.updateHousehold(house_id, currentUser);
    getHouseholds();
}

const deleteMember = async(memberId) => {
    await API.deleteMember(memberId);
    getHouseholds();
}

    return(
    <HouseholdContext.Provider value={{
        transactions, 
        deleteTransaction,
        addTransaction,
        addUserToHousehold,
        createHousehold,
        getTransactions,
        setCurrentHousehold,
        getHouseholds,
        deleteMember,
        chores,
        houseID,
        households,
        currentUser,
        members,
        myHouseholds
    }}>
        {children}
    </HouseholdContext.Provider>
    )

}

export const HouseholdConsumer = HouseholdContext.Consumer; 