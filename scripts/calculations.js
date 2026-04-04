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
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
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
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  const categoriesTotals = [
    ["groceries", calculateCategoryExpenses("groceries")],
    ["restaurants", calculateCategoryExpenses("restaurants")],
    ["transport", calculateCategoryExpenses("transport")],
    ["home", calculateCategoryExpenses("home")],
    ["subscriptions", calculateCategoryExpenses("subscriptions")],
  ];
  let total;
  for (let i = 0; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > total) {
      total = categoriesTotals[i][0];
    }
  }
  return total;
}

function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
}
