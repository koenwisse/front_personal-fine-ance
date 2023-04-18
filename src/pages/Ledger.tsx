import React, { useState } from "react";

interface LedgerProps {
  id: number;
  title: string;
  amount: number;
  type: string;
}

const Ledger: React.FC<LedgerProps> = ({ id, title, amount, type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAmount, setUpdatedAmount] = useState(amount);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // call API or update state
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUpdatedTitle(title);
    setUpdatedAmount(amount);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // call API or update state
  };

  return (
    <div className="border rounded-md p-4 mb-4 transaction-bg">
      {isEditing ? (
        <div>
          <input
            className="border rounded-md p-2 mb-2 w-full"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            className="border rounded-md p-2 mb-2 w-full"
            value={updatedAmount}
            onChange={(e) => setUpdatedAmount(parseFloat(e.target.value))}
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4   rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className={type === "income" ? "text-green-500" : "text-red-500"}>
            {amount}
          </p>
          <div className="flex justify-end">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ledger;
