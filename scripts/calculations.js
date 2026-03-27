let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][2];
}

function calculateAverageExpense() {
  if (!expenseEntries) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (budgetValue - totalExpensesValue < 0) {
    balanceColor = "red";
  } else if (budgetValue - totalExpensesValue < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
