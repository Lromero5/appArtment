import React, {useContext} from 'react';
import {Transaction} from "./transaction"
import {GlobalContext} from "../Finance/context/globalState";


export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  
    return (
        <>
            <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}></Transaction>))}
         
      </ul>
            
        </>
    )
}
