import React, { useState } from 'react';
import { users, expenses, markAsPaid } from '../data';
import AddExpenseForm from '../components/AddExpenseForm';

function Dashboard() {
  const [refresh, setRefresh] = useState(false);

  const handlePayment = (expenseId, userId) => {
    markAsPaid(expenseId, userId);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <AddExpenseForm onExpenseAdded={() => setRefresh(!refresh)} />
      {expenses.map(expense => (
        <div key={expense.id}>
          <p>{expense.description}: {expense.amount.toFixed(2)}</p>
          {users.map(user => (
            <button
              key={user.id}
              disabled={expense.paidBy.includes(user.id) || !expense.splitBetween.includes(user.id)}
              onClick={() => handlePayment(expense.id, user.id)}
            >
              Mark as Paid ({user.name})
            </button>
          ))}
        </div>
      ))}
      <h3>User Balances</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}: {user.balance.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
