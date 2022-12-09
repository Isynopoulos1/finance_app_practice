// NOTE VARIABLES
const addTransactionButton = document.getElementById("add-transaction");
const transactionList = document.getElementById("transactions");
const concept = document.getElementById("concept");
const amount = document.getElementById("amount");
let transactions = [];

let total = 0;
let totalEx = 0;
let totalIn = 0;

// NOTE LIFECYLE
addTransactionButton.addEventListener("click", (e) => {
  e.preventDefault();

  // CHECK IF NOT EMPTY
  if (concept.value !== "" && amount.value !== "") {
    const type = Number(amount.value) < 0 ? "TYPE_EXPENSE" : "TYPE_INCOME";
    handleUpdate(concept.value, amount.value, type);
    handleReset(concept);
    handleReset(amount);
    return handleSaveTransaction();
  } else {
    return console.error("amount or concept cannot be empty");
  }
});
// TODO EVENT LISTENNER OF DELETE TRANSACTION BUTTON

// NOTE HANDLE FUNCTIONS
// DATASTRUCTURE
const loadSavedTransactions = () => {
  transactions = window.localStorage.getItem("transactions")
    ? JSON.parse(window.localStorage.getItem("transactions"))
    : [];
  return;
};
const handleSaveTransaction = () => {
  return window.localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
};
const handleDelete = (node) => node.remove();
const handleReset = (node) => (node.value = "");
const handleTotal = (list) => {
  return list.reduce((pre, acc) => Number(pre) + Number(acc.amount), 0);
};
const handleUpdate = (concept, amount, type) => {
  // DELETE PREVIOUS RENDERED TRANSACTIONS
  const container = document.querySelector(".transaction-container");
  if (container) handleDelete(container);
  // ADD A NEW TRANSACTION TO OUR DATASTRUCTURE
  transactions.push({ concept: concept, amount: amount, type: type });
  // LAUNCH RENDER OF TOTAL AND TRANSACTION LIST IN THE UI
  renderTotals();
  return renderTransactionList(transactions);
};
const handleUpdateTotals = () => {
  total = handleTotal(transactions);
  totalEx = handleTotal(transactions.filter((i) => i.type === "TYPE_INCOME"));
  totalIn = handleTotal(transactions.filter((i) => i.type === "TYPE_EXPENSE"));
  return;
};

// NOTE RENDER FUNCTIONS
const renderTransactionItem = (concept, amount, id) => {
  const transaction = document.createElement("div");
  const deleteButton = document.createElement("span");
  transaction.setAttribute("id", id);
  transaction.setAttribute("class", "transaction-item");
  const transactionContent = `
    <p>${concept}</p>
    <p>$${amount}</p>
  `;
  transaction.innerHTML = transactionContent;
  return transaction;
};
const renderTransactionList = (list) => {
  const listContainer = document.createElement("div");
  listContainer.setAttribute("class", "transaction-container");
  for (let i = 0; i < list.length; i++) {
    const children = renderTransactionItem(list[i].concept, list[i].amount, i);
    listContainer.appendChild(children);
  }
  return transactionList.appendChild(listContainer);
};
const renderTotals = () => {
  handleUpdateTotals();
  const totalDiv = document.getElementById("total");
  const totalIncomeDiv = document.getElementById("income");
  const totalExpenseDiv = document.getElementById("expence");

  totalDiv.innerHTML = `$${total > 0 ? total : 0}`;
  totalIncomeDiv.innerHTML = `$${totalEx}`;
  totalExpenseDiv.innerHTML = `$${Math.abs(totalIn)}`;
};

// NOTE INVOCTIONS
loadSavedTransactions();
renderTransactionList(transactions);
renderTotals();
