#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n");
console.log("=".repeat(80));
console.log(chalk.red.bold("\t\tWelcome to Currency Converter Assignment"));
console.log("=".repeat(80));

//define the list of currencies and their exchange rates
let exchange_rate: any = {
  PKR: 280.2, //Pakistan Rupee
  USD: 1, //US Dollar
  EUR: 0.92, //EURO
  GBP: 0.78, //British Pound
  AED: 3.67, //UAE Dirham
  SAR: 3.75, //Saudi Riyal
  KWD: 0.31, //Kuwaiti Dinar
  CAD: 1.36, //Canadian Dollar
  AUD: 1.5, //Australian Dollar
  OMR: 0.38, //Omani Riyal
  JPY: 157.14, //Japanese Yen
  MYR: 4.6943, //Malaysian Ringgit
  QAR: 3.64, //Qatari Riyal
  BHD: 0.38, //Bahrain Dinar
  THB: 36.58, //Thai Bhat
  CNY: 7.25, //Chinese Yuan
  HKD: 7.81, //Hong Kong Dollar
  DKK: 6.87, //Danish Krone
  NZD: 1.63, //New Zeland Dollar
  SGD: 1.35, //Singapore Dollar
  NOK: 10.5, //Norwegians Krone
  SEK: 10.57, //Swedish Krone
  CHF: 0.91, //Swiss Franc
  INR: 83.22, //Indian Rupee
};

//prompt the user to select currencies to convert
let user_answer = await inquirer.prompt([
  {
    name: "from_currency",
    type: "list",
    message: "\nSelect the Currency to Convert from",
    choices: [
      "PKR",
      "USD",
      "EUR",
      "GBP",
      "AED",
      "SAR",
      "KWD",
      "CAD",
      "AUD",
      "OMR",
      "JPY",
      "MYR",
      "QAR",
      "BHD",
      "THB",
      "CNY",
      "HKD",
      "DKK",
      "NZD",
      "SGD",
      "NOK",
      "SEK",
      "CHF",
      "INR",
    ],
  },
  {
    name: "to_currency",
    type: "list",
    message: "\nSelect the Currency to Convert into",
    choices: [
      "PKR",
      "USD",
      "EUR",
      "GBP",
      "AED",
      "SAR",
      "KWD",
      "CAD",
      "AUD",
      "OMR",
      "JPY",
      "MYR",
      "QAR",
      "BHD",
      "THB",
      "CNY",
      "HKD",
      "DKK",
      "NZD",
      "SGD",
      "NOK",
      "SEK",
      "CHF",
      "INR",
    ],
  },

  {
    name: "amount",
    type: "input",
    message: "\nEnter the Amount to Convert",
  },
]);

//peform currency converison
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

//formula to convert the currency to another currency
let base_currency = amount / from_amount;
let converted_amount = base_currency * to_amount;

//Print the converted amount
console.log("\n");
console.log(
  `Converted amount is = ${chalk.bold.red(converted_amount.toFixed(4))}`
);
console.log("=".repeat(80));
