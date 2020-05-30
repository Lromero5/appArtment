import React from 'react';
import {Transaction} from "./transaction"


export const TransactionList = ({context}) => {
    const { transactions, deleteTransaction } = context

    return (
        <>
            <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(
          <Transaction 
            key={transaction._id} 
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          >
          </Transaction>)
        )}
         
      </ul>
            
        </>
    )
}
