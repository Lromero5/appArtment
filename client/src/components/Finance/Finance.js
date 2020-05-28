import React from 'react';
import {Header} from "../Finance/Header"
import {Balance} from "../Finance/balance"
import {IncomeExpenses} from "../Finance/incomeExpenses"
import {TransactionList} from "../Finance/transactionList"
import {AddTransaction} from "../Finance/addTransaction"
import {GlobalProvider} from "../Finance/context/globalState"

import './Finance.css';

function Finance() {
  return  (
    
    <GlobalProvider>
      <Header/>   
      <div className="containerFinance">
      <Balance/>  
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
        
      </div>  
    </GlobalProvider>
    
  );
}

export default Finance;
