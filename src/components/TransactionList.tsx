import React from "react";
import Ledger from "../pages/Ledger";

interface TransactionListProps {
  transactions: Array<{
    id: number;
    title: string;
    amount: number;
    type: string;
  }>;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      {transactions.map((transaction) => (
        <Ledger
          key={transaction.id}
          id={transaction.id}
          title={transaction.title}
          amount={transaction.amount}
          type={transaction.type}
        />
      ))}
    </div>
  );
};

export default TransactionList;
