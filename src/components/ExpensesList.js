import React, { useState, useEffect } from 'react';

function ExpensesList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/expenses')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.description} - ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;
