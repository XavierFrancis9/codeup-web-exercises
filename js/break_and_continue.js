"use strict";

while (true) {
    let number = prompt("Please enter an odd number between 1 and 50");
    number = parseInt(number);

    if (number >= 1 && number <= 50 && number % 2 !== 0) {
        alert("You entered a valid number: " + number);
        break;
    } else {
        alert("Invalid input. Please try again.");
    }
}


let number = prompt("Please enter an odd number between 1 and 50");
number = parseInt(number);

console.log("Number to skip: " + number);

for(let i = 1; i <= 50; i += 2) {
    if (i === number) {
        console.log("Yikes! Skipping number: " + number);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
