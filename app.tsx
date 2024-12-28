import React, { useState } from 'react';

interface Expense {
  name: string;
  amount: number;
}

const BudgetTracker = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  const calculateBalance = () => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return income - totalExpenses;
  };

  const handleAddExpense = () => {
    if (expenseName && expenseAmount) {
      setExpenses([...expenses, { name: expenseName, amount: expenseAmount }]);
      setExpenseName('');
      setExpenseAmount(0);
    }
  };

  const handleRemoveExpense = (index: number) => {
    setExpenses(expenses.filter((expense, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-orange-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Budget Tracker</h1>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-green-500 mb-2">Total Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-green-500 mb-2">Expense Name:</label>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-green-500 mb-2">Expense Amount:</label>
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleAddExpense}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        Add Expense
      </button>
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Expenses:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="flex justify-between mb-2 bg-yellow-100 p-2 rounded-lg">
              <span className="text-lg font-bold text-gray-500">{expense.name}</span>
              <span className="text-lg font-bold text-gray-500">${expense.amount}</span>
              <button
                onClick={() => handleRemoveExpense(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-2xl font-bold text-purple-500 mb-2">Balance:</h2>
        <p className="text-lg font-bold text-gray-500">${calculateBalance()}</p>
      </div>
    </div>
  );
};

export default BudgetTracker;
