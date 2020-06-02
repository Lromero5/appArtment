import React from 'react';
import {Balance} from "../Finance/balance"
import {IncomeExpenses} from "../Finance/incomeExpenses"
import {TransactionList} from "../Finance/transactionList"
import {AddTransaction} from "../Finance/addTransaction"
import Card from "react-bootstrap/Card"


import './Finance.css';

function Finance({context}) {
  return  (
        <>
   
        <Card>
          <Card.Header>Household Expenses</Card.Header>
          <Card.Body>
        <Balance context={context}/>  
        <IncomeExpenses context={context}/>
        <TransactionList context={context}
          />
          </Card.Body>
          </Card>

        <AddTransaction context={context} />
   
        
        
        </>
    
  );
}

export default Finance;
