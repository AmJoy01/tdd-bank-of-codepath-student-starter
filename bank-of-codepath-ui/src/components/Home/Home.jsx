import * as React from "react"
import { useEffect } from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import axios from "axios"
import "./Home.css"

export default function Home(props) {
  
  useEffect(() => {
    const fetchData = async () => {
      props.setIsLoading(true)
      try {
        const responseTransaction = await axios.get("http://localhost:3001/bank/transactions")        
        if (responseTransaction?.data?.transactions) {
          props.setTransactions(responseTransaction.data.transactions)
        }

        const responseTransfer = await axios.get("http://localhost:3001/bank/transfers")
        if (responseTransfer?.data?.transfers) {
          props.setTransfers(responseTransfer.data.transfers)
        }
      } catch (error) {
         props.setError(error)
      }

      props.setIsLoading(false)
    }

    fetchData()
  }, [])
  

  const filterTransactions = props.filterInputValue
  ? props.transactions?.filter((transaction) => transaction.description.toLowerCase().indexOf(filterInputValue.toLowerCase()) !== -1)
  : props.transactions

  const handleOnSubmitNewTransaction = () => {
    return;
  }
  return (
    <div className="home">
      <AddTransaction filterTransactions = {filterTransactions}
      isCreating = {props.isCreating}
      setIsCreating = {props.setIsCreating}
      form = {props.newTransactionForm}
      setForm = {props.setNewTransactionForm}
      handleOnSubmit = {handleOnSubmitNewTransaction}
      error = {props.error}
      setError = {props.setError}/>
      {props.isLoading ? 
      <h1>Loading...</h1> : 
      <BankActivity transfers = {props.transfers} transactions ={props.transactions} filterInputValue = {props.filterInputValue}/>
      }
     {(props.error) ? <h2 className="error">{props.error}</h2> : null}
    </div>
  )
}
