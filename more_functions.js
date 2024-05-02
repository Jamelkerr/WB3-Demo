"use strict";


function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city);
  console.log(state);
  console.log(zip);
}

function addNumbers(num1, num2) {
    let result = Number(num1) + Number(num2);

    console.log(num1 + " + " + num2 + " = " + result);
}

function displayReceipt(totalDue, amountPaid) {

    let changeDue = totalDue - amountPaid;
    if(changeDue > 0) {
        let message = "Please pay the due amount of " + changeDue
    
    console.log("TotalDue: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);

    console.log("Change Due: " + message);
}
}

console.log("---------------------------------------------")

displayMailingLabel("naj", "309 N broad", "winder", "Georgia", "30680");

console.log("---------------------------------------------")

displayMailingLabel("jam", "185 babbling. Street", "mcdonough", "Georgia", "30021");

console.log("---------------------------------------------")

addNumbers(2000,800);

console.log("---------------------------------------------")

addNumbers(1000,300);

console.log("---------------------------------------------")

displayReceipt(2800, 1300);

console.log("---------------------------------------------")

displayReceipt(2800, 2800);

console.log("---------------------------------------------")

displayReceipt(2800, 3300);

console.log("---------------------------------------------")