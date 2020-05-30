import React from 'react';


export const IncomeExpenses = ({context}) => {
    const amounts = context.transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


    return (
        <div>
            <div>
                <h4>Contributions</h4>
                <p  className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p  className="money minus">{expense}</p>
            </div>
        </div>
    )
}
