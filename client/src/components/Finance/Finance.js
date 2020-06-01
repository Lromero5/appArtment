import React from 'react';
import {Header} from "../Finance/Header"
import {Balance} from "../Finance/balance"
import {IncomeExpenses} from "../Finance/incomeExpenses"
import {TransactionList} from "../Finance/transactionList"
import {AddTransaction} from "../Finance/addTransaction"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"

import './Finance.css';

function Finance({context}) {
  return  (
        <>
        <CardDeck>
        <Card>
          <Card.Body>
          <Card.Header>Household Expenses</Card.Header>
        <Balance context={context}/>  
        <IncomeExpenses context={context}/>
        <TransactionList context={context}
          />
          </Card.Body>
          </Card>

        <AddTransaction context={context} />
        </CardDeck> 
        
        
        </>
    
  );
}

export default Finance;
