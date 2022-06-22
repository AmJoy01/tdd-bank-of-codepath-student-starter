import * as React from "react"
import "./AddTransaction.css"
import { useState } from "react"
import axios from "axios"


export default function AddTransaction(props) {
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  // handleOnSubmit = async () => {
  //     setIsProcessing(true)
  //     props.setError(null)      

  //     const newTransaction = { category, description, amount } 
  // }

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm name = {props.form}/>
    </div>
  )
}

export function AddTransactionForm(props) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input placeholder="description"  type="description" />
        </div>
        <div className="field">
          <label>Category</label>
          <input />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input />
        </div>

        <button className="add-transaction" type="submit" onClick = {() => props.handleOnSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}
