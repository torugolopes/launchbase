const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(type, value) {
  if (type == "credit") {
    user.transactions.push({ type, value });
    user.balance += value;
  } else if (type == "debit") {
    user.transactions.push({ type, value });
    user.balance -= value;
  } else {
    console.log("Transação não identificada");
  }
}

function getHigherTransactionByType(type) {
  let value = 0;
  for (let transaction in user.transactions) {
    if (user.transactions[transaction].type == type) {
      if (user.transactions[transaction].value > value) {
        value = user.transactions[transaction].value;
      }
    }
  }
  return value;
}

function getAverageTransactionValue(user) {
  let value = 0;
  for (let transaction in user.transactions) {
    value += user.transactions[transaction].value;
  }
  return value / user.transactions.length;
}

function getTransactionsCount(user) {
  let debit = 0;
  let credit = 0;
  for (transaction in user.transactions) {
    if (user.transactions[transaction].type == "credit") {
      credit += 1;
    } else if (user.transactions[transaction].type == "debit") {
      debit += 1;
    }
  }
  return { credit, debit };
}

createTransaction("debit", 100);
createTransaction("credit", 150);
createTransaction("credit", 110);
createTransaction("credit", 1200);
