const R = require('ramda');

let balance = 0;

let monthlyDeposit = 13000;
const depEOYgrowth = 0.33;

//let monthlyDeposit = 34000;
//const depEOYgrowth = 0.5;

const initalYear = 2020;
const years = 5;

const yearGain = 0.09;

const inflation = 0.02;

for (year of R.range(initalYear, initalYear + years + 1)) {
  for (month of R.range(1, 12 + 1)) {
    balance += monthlyDeposit;
    const gainOnBalanceEOM = balance * (yearGain / 12);
    balance += gainOnBalanceEOM;
  }
  if (year === 2022) {
    balance += 300000;
  }
  monthlyDeposit += monthlyDeposit * depEOYgrowth;

  balance -= balance * inflation;
}

console.log(monthlyDeposit);
console.log(balance);
