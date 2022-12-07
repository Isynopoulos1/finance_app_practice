// VARIABLES
const addTransactionButton = document.getElementById("add-transaction");
const transactionList = document.getElementById("transactions");
const concept = document.getElementById("concept");
const amount = document.getElementById("amount");

// LIFECYLE
addTransactionButton.addEventListener("click", (e) => {
  e.preventDefault();

  // CHECK IF NOT EMPTY
  if (concept.value !== "" && amount.value !== "") {
    renderTransaction(concept.value, amount.value);
    handleSaveTransaction();
    handleReset(concept);
    return handleReset(amount);
  } else {
    return console.error("amount or concept cannot be empty");
  }
});
// TODO EVENT LISTENNER OF DELETE TRANSACTION BUTTON

// HANDLE FUNCTIONS
const loadSavedTransactions = () => {
  console.log("loading transactions");
  // TODO LOAD PREVIOUSLY SAVED IN LOCALSTORAGE TRANSACTIONS
};
const handleSaveTransaction = () => {
  console.log("save transaction");
  // TODO SAVE TRANSACTION TO LOCALSTORAGE
  return;
};
const handleReset = (node) => {
  node.value = "";
};
const handleDelete = (node) => {
  node.remove();
};

// RENDER FUNCTIONS
const renderTransaction = (concept, amount) => {
  // GENERATE ELEMENT
  const transaction = document.createElement("div");
  // TODO ADD AN ID TO THE TRANSACTION
  const transactionContent = `
    <p>${concept}</p>
    <p>$${amount}</p>
  `;
  transaction.innerHTML = transactionContent;
  // APPEND TO THE LIST
  return transactionList.appendChild(transaction);
};

// INVOCTIONS
loadSavedTransactions();
