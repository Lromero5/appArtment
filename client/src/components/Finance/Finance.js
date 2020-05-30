import React from 'react';
import {Header} from "../Finance/Header"
import {Balance} from "../Finance/balance"
import {IncomeExpenses} from "../Finance/incomeExpenses"
import {TransactionList} from "../Finance/transactionList"
import {AddTransaction} from "../Finance/addTransaction"
import {GlobalConsumer} from "./context/globalState"

import './Finance.css';

function Finance({houseID}) {
  return  (
    
    <GlobalConsumer>
      {(context) => {
        return(
        <>
        <Header/>   
        <div className="containerFinance">
        <Balance context={context}/>  
        <IncomeExpenses context={context}/>
        <TransactionList 
          context={context}
          />
        <AddTransaction context={context} />
        </div>  
        </>
      )}}
    </GlobalConsumer>
    
  );
}

export default Finance;
