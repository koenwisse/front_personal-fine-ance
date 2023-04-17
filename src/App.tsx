import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <h1>Dashboard: Personal Fine-Ance App</h1>
      <h3>Bank Balance: €20.201</h3>
      <Dashboard id={1} title="Rent" amount={1000} type="expense" />
      <Dashboard id={2} title="Salary" amount={2000} type="income" />
    </div>
  );
}

export default App;
