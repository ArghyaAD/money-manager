import React, { useState } from 'react';
import { users, addExpense } from '../data';

function AddExpenseForm({ onExpenseAdded }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpense(description, parseFloat(amount), selectedUsers.map(Number));
    onExpenseAdded();
    setAmount('');
    setDescription('');
    setSelectedUsers([]);
  };

  const toggleUserSelection = (userId) => {
    setSelectedUsers(selectedUsers.includes(userId)
      ? selectedUsers.filter(id => id !== userId)
      : [...selectedUsers, userId]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      {users.map(user => (
        <div key={user.id}>
          <label>
            <input
              type="checkbox"
              checked={selectedUsers.includes(user.id)}
              onChange={() => toggleUserSelection(user.id)}
            />
            {user.name}
          </label>
        </div>
      ))}
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
