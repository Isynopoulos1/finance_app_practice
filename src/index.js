// NOTE VARIABLES
const addTransactionButton = document.getElementById("add-transaction");
const transactionList = document.getElementById("transactions");
const concept = document.getElementById("concept");
const amount = document.getElementById("amount");
const transactionsList = [];
let total = 0;
let totalExpenses = 0;
let totalIncome = 0;

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
const loadSavedTransactions = () => console.log("loading transactions");
const handleSaveTransaction = () => console.log("save transaction");
const handleDelete = (node) => node.remove();
const handleReset = (node) => (node.value = "");
const handleTotal = (list) => {
  return list.reduce((pre, acc) => Number(pre) + Number(acc.amount), 0);
};
const handleUpdate = (concept, amount, type) => {
  const container = document.querySelector(".transaction-container");
  if (container) handleDelete(container);
  transactionsList.push({ concept: concept, amount: amount, type: type });
  total = handleTotal(transactionsList);
  totalExpenses = handleTotal(
    transactionsList.filter((i) => i.type === "TYPE_INCOME")
  );
  totalIncome = handleTotal(
    transactionsList.filter((i) => i.type === "TYPE_EXPENSE")
  );

  return renderTransactionList(transactionsList);
};

// NOTE RENDER FUNCTIONS
const renderTransactionItem = (concept, amount, id) => {
  const transaction = document.createElement("div");
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

// NOTE INVOCTIONS
loadSavedTransactions();
