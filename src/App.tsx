import React from "react";
import "./App.css";
import TransactionList from "./components/TransactionList";
import Dashboard from "./pages/Dashboard";

function App() {
  const transactions = [
    { id: 1, title: "Salary", amount: 5000, type: "income" },
    { id: 2, title: "Rent", amount: 1000, type: "expense" },
    { id: 3, title: "Groceries", amount: 200, type: "expense" },
  ];
  return (
    <div className="App">
      <h1>Dashboard: Personal Fine-Ance App</h1>
      <h3>Bank Balance: €20.201</h3>
      <TransactionList transactions={transactions} />
      {/* <Dashboard id={1} title="Rent" amount={1000} type="expense" />
      <Dashboard id={2} title="Salary" amount={2000} type="income" /> */}
    </div>
  );
}

export default App;
