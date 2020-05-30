import React from 'react';



export const Transaction = ({transaction, deleteTransaction}) => {
    

    const sign = transaction.isExpense ? '-' : '+';

    return (
        <li className={transaction.isExpense ? "minus" : "plus"}>
         {transaction.name} 
         <span>
             {sign}
             ${Math.abs(transaction.amount)}
        </span>
        <button 
            onClick={()=> deleteTransaction(transaction)} 
            className="delete-btn">
                x
        </button>
        </li>
    )
}
