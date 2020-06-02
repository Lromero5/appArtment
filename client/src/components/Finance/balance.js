import React from 'react'

export const Balance = ({context}) => {
  const {transactions} = context
  const total = transactions.map(transaction => transaction.amount)
                .reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
        <h4>Household Finances</h4>
        <h1>{total}</h1>
            
        </>
    )
}
