import * as React from "react"
import { useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import "./App.css"

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [error, setError] = useState(null)
  const [filterInputValue, setFilterInputValue] = useState("")
  const [newTransactionForm, setNewTranactionForm] = useState({ category: "", description: "", amount: 0 })
  const [isCreating, setIsCreating] = useState(false)
 
  // setNewTranactionForm = (newTransaction) => {
  //   setTransactions((transactions) =>[...transactions, newTransaction])
  // }

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar filterInputValue = {filterInputValue} setFilterInputValue = {setFilterInputValue}/>
      <main>
        <Routes>
          <Route path = "/" element={
              <Home 
              transactions = {transactions}
              setTransactions = {setTransactions}
              transfers = {transfers}
              setTransfers = {setTransfers}
              error = {error}
              setError = {setError}
              isLoading = {isLoading}
              setIsLoading = {setIsLoading}
              filterInputValue = {filterInputValue}
              newTransactionForm = {newTransactionForm}
              setNewTranactionForm = {setNewTranactionForm}
              isCreating = {isCreating}
              setIsCreating = {setIsCreating}/>
          }/>

          <Route path = "/transaction/:transactionId" element={
            <TransactionDetail />
          }
          />
        </Routes>

      </main>
      </BrowserRouter>
    </div>
  )
}
