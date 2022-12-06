"use strict";

//selecting elements
const totalEl = document.querySelector("#total");
const savingsEl = document.querySelector("#savings");
const amountSavedEl = document.querySelector(".amount-saved");
const expencesEl = document.querySelector("#expences");
const amountSpendedEl = document.querySelector(".amount-spended");
const summaryDetailsEl = document.querySelector(".summary-container");
const conceptEl = document.querySelector("#concept");
const detailsConceptEl = document.querySelector("#concept-amount");
const conceptTransactionEl = document.querySelector(".concept-transaccion");
const transactionInputed = document.querySelector("#write-concept");
const amounTransationEl = document.querySelector(".amount-transaction");
const btnTransactionEl = document.querySelector("button");

// setting a global variable to this keys and then storing the values inside the function
let totalBudget, expencesValue, incomeValue, summaryValues;

//stablish initial amounts

const displayedBudget = () => {
  expencesValue = 0;
  totalBudget = 0;
  incomeValue = 0;
  summaryValues = 0;

  amountSavedEl.textContent = 0;
  amountSpendedEl.textContent = 0;
  totalEl.textContent = 0;

  return summaryDetailsEl.classList.add("hide");
};

displayedBudget();
