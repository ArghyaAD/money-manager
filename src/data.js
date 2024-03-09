export const users = [
    { id: 1, name: "ARGHYA", balance: 0 },
    { id: 2, name: "ASHISH", balance: 0 },
    { id: 3, name: "SATYAM", balance: 0 },
    { id: 4, name: "ALOK", balance: 0 },
  ];
  
  export const expenses = [];
  
  export function addExpense(description, amount, splitBetween) {
    const splitAmount = amount / splitBetween.length;
    const expense = { description, amount, splitBetween, paidBy: [], id: expenses.length + 1 };
    expenses.push(expense);
    
    splitBetween.forEach(userId => {
      const user = users.find(user => user.id === userId);
      if (user) {
        user.balance += splitAmount;
      }
    });
  }
  
  export function markAsPaid(expenseId, userId) {
    const expense = expenses.find(expense => expense.id === expenseId);
    if (expense && !expense.paidBy.includes(userId)) {
      expense.paidBy.push(userId);
      const user = users.find(user => user.id === userId);
      if (user) {
        user.balance -= expense.amount / expense.splitBetween.length;
      }
    }
  }
  