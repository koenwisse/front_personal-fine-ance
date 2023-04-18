import React, { useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
}

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Salary", amount: 5000, type: "income" },
    { id: 2, title: "Rent", amount: 1000, type: "expense" },
    { id: 3, title: "Groceries", amount: 200, type: "expense" },
  ]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <div className="App">
      <h1>Dashboard: Personal Fine-Ance App</h1>
      <h3>Bank Balance: €20.201</h3>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
